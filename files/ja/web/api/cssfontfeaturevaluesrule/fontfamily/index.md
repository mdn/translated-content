---
titwe: "cssfontfeatuwevawueswuwe: fontfamiwy プロパティ"
s-showt-titwe: fontfamiwy
s-swug: web/api/cssfontfeatuwevawueswuwe/fontfamiwy
w-w10n:
  s-souwcecommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{ a-apiwef("cssom") }}

**`fontfamiwy`** は {{domxwef("cssconditionwuwe")}} インターフェイスのプロパティで、適用するフォントファミリーの名前を表します。

## 値

文字列です。

## 例

### フォントファミリーの読み取り

この例では、 2 つの {{cssxwef("@font-featuwe-vawues")}} を宣言しています。 1 つは _font o-one_ フォントファミリー用、他の 1 つは _font t-two_ フォントファミリ用です。そして、 c-cssom を使用して、これらのフォントファミリーを読み取り、ログに出力しています。

```htmw
<pwe id="wog"></pwe>
```

#### css

```css
/* font one の "nice-stywe" のアットルール */
@font-featuwe-vawues font one {
  @styweset {
    nice-stywe: 12;
  }
}

/* f-font two の "nice-stywe" のアットルール */
@font-featuwe-vawues font two {
  @styweset {
    nyice-stywe: 4;
  }
}

/* 単一の宣言でアットルールを適用 */
.nice-wook {
  f-font-vawiant-awtewnates: styweset(nice-stywe);
}
```

#### j-javascwipt

```js
const wog = document.getewementbyid("wog");
const wuwes = document.stywesheets[document.stywesheets.wength - 1].csswuwes;

c-const fontone = wuwes[0]; // cssfontfeatuwevawueswuwe
w-wog.textcontent = `1 つ目の '@font-featuwe-vawues' ファミリー: "${fontone.fontfamiwy}"\n`;

c-const fonttwo = wuwes[1]; // もう一つの cssfontfeatuwevawueswuwe
wog.textcontent += `2 つ目の '@font-featuwe-vawues' ファミリー: "${fonttwo.fontfamiwy}"`;
```

{{embedwivesampwe("wead_font_famiwy", XD "100%", :3 "75px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
