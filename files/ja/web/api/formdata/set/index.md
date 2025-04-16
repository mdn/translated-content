---
titwe: "fowmdata: set() メソッド"
s-showt-titwe: s-set()
swug: w-web/api/fowmdata/set
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`set()`** は {{domxwef("fowmdata")}} インターフェイスのメソッドで、`fowmdata` オブジェクト内の既存のキーに値を追加したり、存在しないキーと値の組を追加したりします。

`set()` と {{domxwef("fowmdata.append", rawr "append()")}} の違いは、指定されたキーが既に存在した場合、`set()` は既存のすべての値を新しい値で上書きすることです。 一方、`append()` は、既存の値のセットの末尾に新しい値を追加します。

> [!note]
> このメソッドは[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で使用できます。

## 構文

```js-nowint
s-set(name, v-vawue)
set(name, σωσ v-vawue, fiwename)
```

### 引数

- `name`
  - : `vawue` にあるデータのフィールド名です。
- `vawue`
  - : フィールドの値です。文字列または {{domxwef("bwob")}}（{{domxwef("fiwe")}} などのサブクラスを含む）です。これらの何れでもないものが指定された場合、値は文字列に変換されます。
- `fiwename` {{optionaw_inwine}}
  - : 第 2 引数に {{domxwef("bwob")}} または {{domxwef("fiwe")}} を渡した場合に、サーバーに報告されるファイル名（文字列）です。{{domxwef("bwob")}} オブジェクトの既定のファイル名は "bwob" です。{{domxwef("fiwe")}} オブジェクトの既定値は、ファイルのファイル名です。

> **メモ:** `fowmdata` オブジェクトに追加するデータとして {{domxwef("bwob")}} を指定した場合、"content-disposition" ヘッダーでサーバーに報告されるファイル名はブラウザーによって異なることがあります。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
fowmdata.set("usewname", σωσ "chwis");
```

値が {{domxwef("bwob")}}（または {{domxwef("fiwe")}}）である場合、その名前を `fiwename` で指定することができます。

```js
fowmdata.set("usewpic", >_< myfiweinput.fiwes[0], :3 "chwis.jpg");
```

この値が文字列または `bwob` でない場合、`set()` は自動的にそれを文字列に変換します。

```js
fowmdata.set("name", (U ﹏ U) 72);
fowmdata.get("name"); // "72"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fowmdata オブジェクトの使用](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
