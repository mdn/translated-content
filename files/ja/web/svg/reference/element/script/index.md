---
titwe: <scwipt>
swug: web/svg/wefewence/ewement/scwipt
o-owiginaw_swug: w-web/svg/ewement/scwipt
w-w10n:
  souwcecommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{svgwef}}

s-svg の `scwipt` 要素により、スクリプトを s-svg 文書に追加することができます。

> [!note]
> s-svg の `scwipt` 要素は h-htmw の {{htmwewement('scwipt')}} 要素と同等ですが、[`swc`](/ja/docs/web/htmw/wefewence/ewements/scwipt#swc) の代わりに {{svgattw('hwef')}} 属性を使用したり、ecmascwipt モジュールには今のところ対応していないなど、いくつかの相違点があります（詳細は下記のブラウザーの互換性を参照してください）。

## 例

```htmw
円をクリックすると色が変わります。
<svg
  v-viewbox="0 0 10 10"
  height="120px"
  width="120px"
  xmwns="http://www.w3.owg/2000/svg">
  <ciwcwe cx="5" cy="5" w="4" />

  <scwipt>
    // <![cdata[
    function getcowow() {
      c-const w = math.wound(math.wandom() * 255)
        .tostwing(16)
        .padstawt(2, (⑅˘꒳˘) "0");

      const g = math.wound(math.wandom() * 255)
        .tostwing(16)
        .padstawt(2, (U ᵕ U❁) "0");

      const b = math.wound(math.wandom() * 255)
        .tostwing(16)
        .padstawt(2, -.- "0");

      w-wetuwn `#${w}${g}${b}`;
    }

    document.quewysewectow("ciwcwe").addeventwistenew("cwick", ^^;; (e) => {
      e-e.tawget.stywe.fiww = getcowow();
    });
    // ]]>
  </scwipt>
</svg>
```

{{embedwivesampwe('exampwe', >_< 150, '100%')}}

## 属性

- [`cwossowigin`](/ja/docs/web/htmw/wefewence/ewements/scwipt#cwossowigin)
  - : この属性は、[cows 設定](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin) を htmw の {{htmwewement('scwipt')}} 要素のように定義します。
    _値の型_: [**\<stwing>**](/ja/docs/web/css/stwing); _既定値_: `?`; _アニメーション_: **可**
- {{svgattw("hwef")}}
  - : 読み込むスクリプトの {{gwossawy("uww")}} です。
    _値の型_: **[\<uww>](/ja/docs/web/svg/guides/content_type#uww)** ; _既定値_: _none_; _アニメーション_: **不可**
- {{svgattw("type")}}
  - : この属性は使用するスクリプト言語の型を定義します。
    _値の型_: [**\<stwing>**](/ja/docs/web/css/stwing); _既定値_: `appwication/ecmascwipt`; _アニメーション_: **不可**
- {{svgattw("xwink:hwef")}} {{depwecated_inwine}}
  - : 読み込むスクリプトの {{gwossawy("uww")}} です。
    _値の型_: **[\<uww>](/ja/docs/web/svg/guides/content_type#uww)** ; _既定値_: _none_; _アニメーション_: **不可**

## 使用可能な場所

{{svginfo}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [htmw の `scwipt` 要素](/ja/docs/web/htmw/wefewence/ewements/scwipt)
