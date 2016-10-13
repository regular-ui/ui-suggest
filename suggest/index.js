import { ListView } from 'rgui-ui-listview';
import { Overlay } from 'rgui-ui-overlay';
import { Field, InputField } from 'rgui-ui-field';
import template from './index.rgl';

/**
 * @class Suggest
 * @extend Field
 * @param {object}                  options.data                     =  绑定属性
 * @param {string=''}               options.data.value              <=> 文本框的值
 * @param {string=''}               options.data.type                => 文本框的类型
 * @param {string=''}               options.data.size               <=> 文本框的尺寸
 * @param {string=''}               options.data.state              <=> 文本框的状态
 * @param {string=''}               options.data.tip                <=> 小贴示
 * @param {object[]=[]}             options.data.rules               => 验证规则集
 * @param {string='请输入'}         options.data.placeholder         => 文本框的占位文字
 * @param {number}                  options.data.maxlength           => 文本框的最大长度
 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
 * @param {number=0}                options.data.startAt             => 开始提示位置。当输入长度>=该值后开始提示
 * @param {string='includes'}       options.data.matchType           => 匹配方式，`includes`表示包含即可，`startsWith`表示只匹配开头，`endsWith`表示只匹配结尾
 * @param {boolean=false}           options.data.strict              => 是否为严格模式。当为严格模式时，`value`属性必须为一个选项的值，否则为空。
 * @param {boolean=false}           options.data.open               <=> 当前为展开/收起状态
 * @param {string='bottom-left'}    options.data.direction           => 展开方向
 * @param {boolean=false}           options.data.readonly            => 是否只读
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Suggest = Field.extend({
    name: 'suggest',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.defaults({
            _list: [],
            _selected: undefined,
            // @inherited value: '',
            // @inherited state: '',
            // @inherited tip: '',
            // // @inherited rules: [],
            open: undefined,
            direction: 'bottom-left',
            placeholder: '',
            maxlength: undefined,
            autofocus: false,
            startAt: 0,
            delay: 300,
            matchType: 'includes',
            strict: false,
        });
        this.supr();
    },
    /**
     * @protected
     * @override
     */
    watch() {
        this.$watch('value', (value) => {
            /**
             * @event change 文本框的值改变时触发
             * @property {object} sender 事件发送对象
             * @property {var} value 改变后的值
             */
            this.$emit('change', {
                sender: this,
                value,
            });
        });
    },
    /**
     * @method select(item) 选择某一项
     * @public
     * @override
     * @param  {Item} item 选择项
     * @return {void}
     */
    select(item) {
        /**
         * @event select 选择某一项时触发
         * @property {object} sender 事件发送对象
         * @property {Item} selected 当前选择项
         * @property {var} value 当前选择值
         */
        this.data.value = item.data.value;
        this.supr(item);
        this.$refs.overlay.toggle(false);
    },
        /**
         * @event toggle 展开/收起时触发
         * @property {object} sender 事件发送对象
         * @property {boolean} open 展开/收起状态
         * @property {string} direction 展开方向
         */
    /**
     * @method filter(item, value) 根据输入值判断某一项是否要过滤
     * @public
     * @param  {Item} item 选择项
     * @param  {string} value 输入值
     * @return {void}
     */
    filter(item, value) {
        const itemValue = item.data.value === undefined ? '' : item.data.value + '';
        return itemValue[this.data.matchType](value);
    },
    /**
     * @public
     */
    focus() {
        this.$refs.inputField.focus();
    },
    /**
     * @public
     */
    blur() {
        this.$refs.inputField.blur();
    },
    /**
     * @public
     */
    validate(trigger) {
        this.$refs.inputField.validate(trigger);
    },
    /**
     * @private
     */
    _onFocusOrInput($event) {
        // @TODO $event.sender
        const value = $event.target.value;

        // 只在这种情况下才会展开，所以在这里处理哪些项显示/隐藏
        this.data._list.forEach((item) => {
            item.data.visible = this.filter(item, value);
        });

        this.$refs.overlay.toggle(value.length >= this.data.startAt);
    },
    /**
     * @private
     */
    _onBlur($event) {
        setTimeout(() => {
            if (!this.data.strict)
                return;

            this.data._selected = this.data._list.find((item) => item.data.value === this.data.value);
            if (!this.data._selected)
                this.data.value = '';
        });
    },
});

export default Suggest;
