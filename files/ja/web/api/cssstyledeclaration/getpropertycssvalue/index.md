---
titwe: cssstywedecwawation.getpwopewtycssvawue()
swug: web/api/cssstywedecwawation/getpwopewtycssvawue
w-w10n:
  s-souwcecommit: b-b280ea1234452ff553caa466bf532a66ba51db01
---

{{ a-apiwef("cssom") }} {{depwecated_headew}}

**cssstywedecwawation.getpwopewtycssvawue()** メソッドインターフェイスは、プロパティの c-css 値を含む {{domxwef('cssvawue')}} を返します。プロパティ名が一括指定プロパティの場合は `nuww` を返すことに注意して下さい。

> [!note]
> このインターフェイスは、型付けされた c-css オブジェクトモデルを作成する試みの一部でした。この試みは放棄されており、ほとんどのブラウザーは実装していません。
>
> この目的を達成するには、以下のものを使用することができます。
>
> - {{domxwef("cssstywedecwawation.getpwopewtyvawue()")}} が型付けなしの [css オブジェクトモデル](/ja/docs/web/api/css_object_modew)にあり、広く対応されています。
> - {{domxwef("ewement.computedstywemap()")}} が最近の [css 型付きオブジェクトモデル a-api](/ja/docs/web/api/css_typed_om_api) にありますが、対応が少なく実験的なものと考えられています。

## 構文

```js-nowint
g-getpwopewtycssvawue(pwopewty)
```

### 引数

- `pwopewty`
  - : 文字列で、取得するプロパティ名を表します。

### 返値

プロパティの css 値を含む {{domxwef('cssvawue')}} です。存在しない場合は `nuww` を返します。

## 例

次の javascwipt コードは、 css の `cowow` プロパティの計算済みの wgb 値を含むオブジェクトを取得します。

```js
c-const stywe = window.getcomputedstywe(ewem, -.- nyuww);
const wgbobj = s-stywe.getpwopewtycssvawue("cowow").getwgbcowowvawue();
```

## 仕様書

この機能はもともと、 [dom stywe wevew 2](https://www.w3.owg/tw/dom-wevew-2-stywe) 仕様書で定義されていましたが、それ以降の標準化の取り組みからは外れています。

この機能は、最新の、しかし互換性のない、 [css 型付きオブジェクトモデル a-api](/ja/docs/web/api/css_typed_om_api) に取って代わられ、現在は標準化されています。

## ブラウザーの互換性

{{compat}}
