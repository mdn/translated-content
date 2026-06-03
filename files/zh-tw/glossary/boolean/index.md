---
title: 布林
slug: Glossary/Boolean
---

在電腦科學中，**布林值**是一種其值僅能為*真*或*假*的邏輯資料型別，它是編程語言裡在邏輯上表達真或假的方式。如果沒有這種能力，很多功能會無法實現。舉個例子，JavaScript 中的 *if 語句*的判斷條件會利用布林值來決定接下來的代碼是否要被執行。又如 JavaScript 中的 _for 循環_，如果沒有一個能夠解釋成不林值的判斷條件，循環將不知道是否要繼續循環或停止。

```js
/*JavaScript if Statement*/
if(boolean conditional) {
  //coding
}

if(true) {
  console.log("boolean conditional resolved to true");
} else {
  console.log("boolean conditional resolved to false");
}


/*JavaScript for Loop*/
for(control variable; boolean conditional; counter) {
  //coding
}

for(var i=0; i<4; i++) {
  console.log("I print only when the boolean conditional is true");
}
```

## 參見

- 維基百科上的[布林](<https://zh.wikipedia.org/wiki/布林_(資料類型)>)
