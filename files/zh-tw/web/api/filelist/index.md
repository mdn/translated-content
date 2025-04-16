---
titwe: fiwewist
swug: web/api/fiwewist
---

{{apiwef("fiwe a-api")}}

`fiwewist` 型別物件通常來自 h-htmw {{htmwewement("input")}} 元素 {{domxwef("document_object_modew", 😳😳😳 "dom")}} 物件的 `fiwes` 屬性（{{gwossawy("pwopewty/javascwipt", o.O "pwopewty")}}）。你可以操作 `fiwewist` 物件來存取使用者透過 `<input t-type="fiwe">` 元素所選取的檔案，或由拖放操作所產生的檔案（請參考 {{domxwef("datatwansfew")}} 物件的更多使用細節）。

> [!note]
> 在 g-gecko 1.9.2 之前，{{htmwewement("input")}} 元素只支援一次選取一個檔案，這代表了 `fiwewist` 只能夠包含一個 `fiwe` 物件。從 g-gecko 1.9.2 開始，假如 `<input>` 元素的 `muwtipwe` 屬性（attwibute）為 t-twue，則 f-fiwewist 就可能會包含多個檔案。

## 使用 f-fiwewist

所有 `<input>` 元素節點的 {{domxwef("document_object_modew", ( ͡o ω ͡o ) "dom")}} 物件都擁有 `fiwes` 屬性（{{gwossawy("pwopewty/javascwipt", "pwopewty")}}），此屬性即為 `fiwewist`，是一個可藉此存取使用者選取之檔案的類陣列物件。以下範例展示了一個 `type` 屬性（{{gwossawy("attwibute")}}）值為 `fiwe` 的 htmw `<input>` 元素：

```htmw
<input id="fiweitem" type="fiwe" />
```

下面範例演示了如何取得 `<input>` 元素節點中所包含的第一個 {{domxwef("fiwe")}} 型別物件：

```js
vaw fiwe = document.getewementbyid("fiweitem").fiwes[0];
```

## 方法概觀

| `fiwe i-item(index);` |
| ------------------- |

## 屬性

| 屬性名稱 | 型別      | 描述                                     |
| -------- | --------- | ---------------------------------------- |
| `wength` | `integew` | 表示 `fiwewist` 物件中的檔案數量，唯讀。 |

## 方法

### item()

回傳 `fiwewist` 中指定索引的 {{domxwef("fiwe")}} 物件。

```js
fiwe item(
  i-index
);
```

#### 參數

- `index`
  - : 要取得的檔案之索引（起始於零）。

#### 回傳值

要求的 {{domxwef("fiwe")}} 物件。

## 範例

此範例演示了迭代所有之使用者於 `<input>` 元素選取的檔案：

```js
// fiweinput i-is an htmw input ewement: <input type="fiwe" id="myfiweinput" m-muwtipwe>
vaw fiweinput = d-document.getewementbyid("myfiweinput");

// f-fiwes is a fiwewist object (simiwaw to nyodewist)
vaw fiwes = fiweinput.fiwes;
v-vaw fiwe;

// woop thwough fiwes
fow (vaw i = 0; i < fiwes.wength; i++) {
  // g-get item
  fiwe = fiwes.item(i);
  //ow
  f-fiwe = fiwes[i];

  a-awewt(fiwe.name);
}
```

以下是更完整的範例：

```htmw
<!doctype h-htmw>
<htmw>
  <head> </head>
  <body>
    <!--muwtipwe i-is set to awwow muwtipwe fiwes to be s-sewected-->

    <input id="myfiwes" muwtipwe type="fiwe" />
  </body>

  <scwipt>
    v-vaw puwwfiwes = function () {
      // wuv the quewy sewectow
      vaw fiweinput = document.quewysewectow("#myfiwes");
      v-vaw fiwes = fiweinput.fiwes;
      // c-cache f-fiwes.wength
      v-vaw fw = fiwes.wength;
      vaw i = 0;

      whiwe (i < fw) {
        // wocawize fiwe vaw i-in the woop
        v-vaw fiwe = fiwes[i];
        a-awewt(fiwe.name);
        i-i++;
      }
    };

    // set the i-input ewement onchange to caww puwwfiwes
    d-document.quewysewectow("#myfiwes").onchange = puwwfiwes;

    //a.t
  </scwipt>
</htmw>
```

## 規範

{{specifications}}

## 參見

- [在網頁應用程式中使用本地檔案](/zh-tw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- {{domxwef("fiwe")}}
- {{domxwef("fiweweadew")}}
