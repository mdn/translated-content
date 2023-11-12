---
title: ライブコードサンプルの簡単なデモ
slug: orphaned/MDN/Structures/Live_samples/Simple_live_sample_demo
---

{{MDNSidebar}}

## 例

これは、MDN でライブデモを行う方法を示す非常に簡単な例です。詳細については、[ライブサンプル](/ja/docs/MDN/Contribute/Structures/Live_samples)を参照してください。

```html
<form>
  <label>Try me<input type="text" name="name"></label>
  <input type="submit" value="go">
</form>
```

```css
form {
  border-radius: 10px;
  background: powderblue;
}
```

```js
var f = document.querySelector('form');

f.addEventListener('submit', function(ev) {
  ev.preventDefault();
  document.querySelectorAll('input')[1].value = 'sending';
}, false);
```

{{ EmbedLiveSample('The_example', '', '', '') }}

> **メモ:** ローカライズしたページでは、最初の引数の値は、サンプルを含む見出しの ID と同じにしてください．
