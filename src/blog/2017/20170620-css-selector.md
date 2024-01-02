# CSS 选择器

CSS样式通过选择器，来将样式应用于指定的HTML元素。

### 常用的选择器
#### 元素选择器
元素选择器用来选择特定类型的元素,如段落、标题等元素。
```
 h1 { font-weight: bold; }
 p { color: blue; }
```
#### 后代选择器
后代选择器用来选择特定元素的后代。设置blockquote 下的p元素的样式。
```
blockquote p {
    padding-left: 2em;
    background-color: aquamarine;
    color: red;
}
```
以上两种选择器适合那些应用范围广的一般性样式，要范围更小的指定元素，可以使用```ID选择器```和```类选择器```。
#### ID 选择器
ID选择器需要为元素指定ID，ID选择器通常以```#```字符表示。
```
//html
<p id="intro">Happy Birthday Dennis.</p>

// css
#intro { font-weight: bold; }
```
#### 类选择器
类选择器需要为元素指定类名，类选择器通常以```.```字符表示。
```
//html
<p class="date-posted">2018-12-26</p>

// css
.date-posted { color: #ccc; }
```
> 注意不要过度依赖类选择器和ID选择器。有时候有些元素的差异只是在页面上的位置不同，不要给这些元素指定不同的类，而应将一个类或id应用于他们的祖先，然后用后代选择器去选择定位。
