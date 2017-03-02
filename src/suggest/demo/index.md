## 示例
### 基本形式

<div class="m-example"></div>

```xml
<suggest>
    <item value="abandon">abandon</item>
    <item value="about">about</item>
    <item value="absent">absent</item>
    <item value="bread">bread</item>
    <item value="break">break</item>
    <item value="brief">brief</item>
    <item value="calendar">calendar</item>
    <item value="cancel">cancel</item>
    <item value="column">column</item>
</suggest>
```

### 文本框属性

<div class="m-example"></div>

```xml
<suggest maxlength="6" placeholder="输入时会自动提示">
    <item value="abandon">abandon</item>
    <item value="about">about</item>
    <item value="absent">absent</item>
    <item value="bread">bread</item>
    <item value="break">break</item>
    <item value="brief">brief</item>
    <item value="calendar">calendar</item>
    <item value="cancel">cancel</item>
    <item value="column">column</item>
</suggest>
```

### 只读，禁用，禁用某一项

<div class="m-example"></div>

```xml
<suggest readonly placeholder="只读">
    <item value="abandon">abandon</item>
    <item value="about">about</item>
    <item value="absent">absent</item>
    <item value="bread">bread</item>
</suggest>
<suggest disabled placeholder="禁用">
    <item value="abandon">abandon</item>
    <item value="about">about</item>
    <item value="absent">absent</item>
    <item value="bread">bread</item>
</suggest>
<suggest placeholder="禁用某一项">
    <item value="abandon">abandon</item>
    <item value="about">about</item>
    <item value="absent">absent</item>
    <item value="bread" disabled>bread</item>
</suggest>
```

### 开始提示位置

当输入长度>=`startAt`属性后开始提示。

<div class="m-example"></div>

```xml
<suggest startAt="2" placeholder="2字符后开始提示">
    <item value="abandon">abandon</item>
    <item value="about">about</item>
    <item value="absent">absent</item>
    <item value="bread">bread</item>
    <item value="break">break</item>
    <item value="brief">brief</item>
    <item value="calendar">calendar</item>
    <item value="cancel">cancel</item>
    <item value="column">column</item>
</suggest>
```

### 匹配方式

<div class="m-example"></div>

```xml
<suggest matchType="includes" placeholder="包括即可（默认）">
    <item value="abandon">abandon</item>
    <item value="about">about</item>
    <item value="absent">absent</item>
    <item value="bread">bread</item>
    <item value="break">break</item>
    <item value="brief">brief</item>
    <item value="calendar">calendar</item>
    <item value="cancel">cancel</item>
    <item value="column">column</item>
</suggest>
<suggest matchType="startsWith" placeholder="只匹配开头">
    <item value="abandon">abandon</item>
    <item value="about">about</item>
    <item value="absent">absent</item>
    <item value="bread">bread</item>
    <item value="break">break</item>
    <item value="brief">brief</item>
    <item value="calendar">calendar</item>
    <item value="cancel">cancel</item>
    <item value="column">column</item>
</suggest>
<suggest matchType="endsWith" placeholder="只匹配结尾">
    <item value="abandon">abandon</item>
    <item value="about">about</item>
    <item value="absent">absent</item>
    <item value="bread">bread</item>
    <item value="break">break</item>
    <item value="brief">brief</item>
    <item value="calendar">calendar</item>
    <item value="cancel">cancel</item>
    <item value="column">column</item>
</suggest>
```

### 严格模式

当为严格模式时，`value`属性必须为一个选项的值，否则为空。

<div class="m-example"></div>

```xml
<suggest placeholder="非严格模式（默认）">
    <item value="abandon">abandon</item>
    <item value="about">about</item>
    <item value="absent">absent</item>
    <item value="bread">bread</item>
    <item value="break">break</item>
    <item value="brief">brief</item>
    <item value="calendar">calendar</item>
    <item value="cancel">cancel</item>
    <item value="column">column</item>
</suggest>
<suggest strict placeholder="严格模式">
    <item value="abandon">abandon</item>
    <item value="about">about</item>
    <item value="absent">absent</item>
    <item value="bread">bread</item>
    <item value="break">break</item>
    <item value="brief">brief</item>
    <item value="calendar">calendar</item>
    <item value="cancel">cancel</item>
    <item value="column">column</item>
</suggest>
```

