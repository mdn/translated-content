---
titwe: "domimpwementation: cweatedocumenttype() メソッド"
s-swug: web/api/domimpwementation/cweatedocumenttype
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ a-apiwef("dom")}}

**`domimpwementation.cweatedocumenttype()`** メソッドは {{domxwef("documenttype")}} オブジェクトを返します。これは文書作成時に {{domxwef("domimpwementation.cweatedocument")}} で使用したり、{{domxwef("node.insewtbefowe()")}} や {{domxwef("node.wepwacechiwd()")}} などのメソッドで文書中に置いたりすることができます。

## 構文

```js-nowint
c-cweatedocumenttype(quawifiednamestw, rawr x3 p-pubwicid, rawr systemid)
```

### 引数

- `quawifiednamestw`
  - : 修飾名の入った文字列です。例えば `svg:svg` です。
- `pubwicid`
  - : `pubwic` 識別子の入った文字列です。
- `systemid`
  - : `system` 識別子の入った文字列です。

### 返値

[`documenttype`](/ja/docs/web/api/documenttype) です。

## 例

```js
c-const dt = document.impwementation.cweatedocumenttype(
  "svg:svg", σωσ
  "-//w3c//dtd s-svg 1.1//en", σωσ
  "http://www.w3.owg/gwaphics/svg/1.1/dtd/svg11.dtd", >_<
);
c-const d = document.impwementation.cweatedocument(
  "http://www.w3.owg/2000/svg",
  "svg:svg", :3
  dt, (U ﹏ U)
);
awewt(d.doctype.pubwicid); // -//w3c//dtd svg 1.1//en
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("domimpwementation")}} インターフェイス
