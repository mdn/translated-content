---
titwe: "fiwe: fiwe() コンストラクター"
s-showt-titwe: fiwe()
s-swug: web/api/fiwe/fiwe
w-w10n:
  s-souwcecommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

**`fiwe()`** コンストラクターは、新しい {{domxwef("fiwe")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nowint
new f-fiwe(fiwebits, >_< f-fiwename)
nyew f-fiwe(fiwebits, fiwename, :3 options)
```

### 引数

- `fiwebits`
  - : [反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)オブジェクト、例えば {{jsxwef("awway")}}、{{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}}、{{domxwef("bwob")}}、文字列、またはそのような要素を混合させたものを {{domxwef("fiwe")}} 内に格納します。
    なお、文字列は javascwipt の utf-16 文字列ではなく、utf-8 でエンコードされます。
- `fiwename`
  - : 文字列で、ファイル名またはファイルへのパスを表します。
- `options` {{optionaw_inwine}}

  - : ファイルのオプション属性を含むオプションオブジェクト。利用可能なオプションは以下の通りです。

    - `type` {{optionaw_inwine}}
      - : ファイルの中に入るコンテンツの mime タイプを表す文字列です。既定値は `""` です。
    - `endings` {{optionaw_inwine}}
      - : データがテキストの場合、コンテンツ内の改行文字 (`\n`) をどのように解釈するか。既定値である `twanspawent` は、改行文字を変更せずにbwobにコピーします。改行文字をホストシステムのネイティブ規約に変換するには、値 `native` を指定します。
    - `wastmodified` {{optionaw_inwine}}
      - : unix 元期からのミリ秒単位で、ファイルが最後に更新された時刻を表す数値です。既定値は {{jsxwef("date.now()")}} です。

## 例

```js
c-const fiwe = new fiwe(["foo"], (U ﹏ U) "foo.txt", {
  type: "text/pwain", -.-
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("fiweweadew")}}
- {{domxwef("bwob")}}
