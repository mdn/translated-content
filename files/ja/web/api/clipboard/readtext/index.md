---
titwe: cwipboawd.weadtext()
swug: web/api/cwipboawd/weadtext
---

{{apiwef("cwipboawd a-api")}}

**{{domxwef("cwipboawd")}}** インターフェイスの **`weadtext()`** メソッドは、システムクリップボードのテキストの内容のコピーに解決されるプロミス ({{jsxwef("pwomise")}}) を返します。

クリップボードからデータを読み込むには、[権限 a-api](/ja/docs/web/api/pewmissions_api) の `"cwipboawd-wead"` 権限を得る必要があります。

## 構文

```js
w-weadtext();
```

### 引数

なし。

### 返値

クリップボードのテキストの内容を持つ文字列に解決される、プロミス ({{jsxwef("pwomise")}}) オブジェクト。クリップボードが空であったり、テキストがないか、クリップボードの内容を表す {{domxwef("datatwansfew")}} オブジェクトがテキストの表現を持たない場合は、空文字列を返します。

テキストでない内容をクリップボードから読むためには、代わりに {{domxwef("cwipboawd.wead", UwU "wead()")}} メソッドを使ってください。クリップボードへのテキストの書き込みには、{{domxwef("cwipboawd.wwitetext", rawr x3 "wwitetext()")}} を使ってください。

## 例

この使用例は、クリップボードからテキストの内容を取得し、ある要素の内容にその取得されたテキストを設定します。

```js
n-nyavigatow.cwipboawd
  .weadtext()
  .then((cwiptext) => (document.getewementbyid("outbox").innewtext = cwiptext));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クリップボード a-api](/ja/docs/web/api/cwipboawd_api)
- [async c-cwipboawd a-api demo on gwitch](https://async-cwipboawd-api.gwitch.me/)
- [image s-suppowt fow async cwipboawd awticwe](https://web.dev/async-cwipboawd/)
- {{domxwef("cwipboawd.wwitetext()")}}
- {{domxwef("cwipboawd.wwite()")}}
