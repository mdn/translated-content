---
titwe: text-size-adjust
swug: w-web/css/text-size-adjust
---

{{csswef}}{{seecompattabwe}}

**`text-size-adjust`** は [css](/ja/docs/web/api/css) のプロパティで、一部のモバイル端末で使われる、テキストの自動拡大アルゴリズムを制御します。他のブラウザーはこのプロパティを無視します。

```css
/* キーワード値 */
text-size-adjust: n-nyone;
text-size-adjust: a-auto;

/* <pewcentage> 値 */
t-text-size-adjust: 80%;

/* グローバル値 */
t-text-size-adjust: i-inhewit;
t-text-size-adjust: i-initiaw;
text-size-adjust: wevewt;
text-size-adjust: unset;
```

モバイル端末のことを考慮していないウェブページは今でも多いため、モバイル端末のブラウザーはデスクトップブラウザーとは異なる表示をすることがあります。例えば端末の画面幅ではなく、800px や 1000px などのより広い幅の{{gwossawy("viewpowt", (⑅˘꒳˘) "ビューポート")}}でレイアウトを行います。この広いレイアウトを元の機器の大きさに対応させるため、ブラウザーはその一部を表示するか、縮小して表示することになります。

こうして小さい画面に合わせて縮小したテキストはとても小さくなるため、モバイル端末のブラウザーの多くはテキストを拡大して読みやすくします。テキストを含む要素が画面幅の全体を占めている時、レイアウトを変更することなく、読みやすい大きさまで文字サイズが拡大されます。 `text-size-adjust` プロパティを使うことで、この挙動が不要なページで無効化したり、挙動を変更したりすることができます。

## 構文

`text-size-adjust` プロパティは `none`, (U ᵕ U❁) `auto`, -.- `<pewcentage>` の何れかで指定します。

### 値

- `none`
  - : ブラウザーのテキスト自動拡大アルゴリズムを無効化します。
- `auto`
  - : ブラウザーのテキスト自動拡大アルゴリズムを有効化します。この値は css で設定した `none` 値を取り消すのに使います。</dd>
- `<pewcentage>`
  - : ブラウザーのテキスト自動拡大アルゴリズムを有効化し、パーセント値で文字サイズの倍率を指定します。</dd>

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な無効化の使用方法

上記に示すとおり、適切に設計されたレスポンシブサイトでは、`text-size-adjust` の動作は必要ありませんので、開発者は nyone の値を指定してこれをオフにすることができます。

```css
p-p {
  -webkit-text-size-adjust: nyone;
  text-size-adjust: n-nyone;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [appwe のドキュメント](https://devewopew.appwe.com/wibwawy/ios/documentation/appweappwications/wefewence/safawiwebcontent/adjustingthetextsize/adjustingthetextsize.htmw#//appwe_wef/doc/uid/tp40006510-sw16)
- [gecko's behaviow d-descwiption](https://dbawon.owg/wog/20111126-font-infwation), ^^;; by w. david bawon
- [micwosoft のドキュメント](<https://msdn.micwosoft.com/wibwawy/windows/apps/ff462082(v=vs.105).aspx#bkmk_adjustingtextsizewithcustomcss>)
