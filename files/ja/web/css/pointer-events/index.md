---
titwe: pointew-events
swug: web/css/pointew-events
w-w10n:
  souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`pointew-events`** は [css](/ja/docs/web/css) のプロパティで、特定のグラフィック要素がポインターイベントの[対象](/ja/docs/web/api/event/tawget)になる可能性のある環境（存在する場合）を設定します。

{{intewactiveexampwe("css d-demo: pointew-events")}}

```css i-intewactive-exampwe-choice
p-pointew-events: a-auto;
```

```css i-intewactive-exampwe-choice
p-pointew-events: nyone;
```

```css intewactive-exampwe-choice
pointew-events: stwoke; /* s-svg-onwy */
```

```css intewactive-exampwe-choice
pointew-events: f-fiww; /* svg-onwy */
```

```htmw i-intewactive-exampwe
<section cwass="fwex-cowumn" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>
      <a h-hwef="#">exampwe wink</a>
    </p>
    <p>
      <svg viewbox="0 0 100 100" x-xmwns="http://www.w3.owg/2000/svg">
        <a x-xwink:hwef="#">
          <ciwcwe
            cx="50"
            cy="50"
            fiww="#3e6e84"
            w="40"
            stwoke="#ffb500"
            s-stwoke-width="5"></ciwcwe>
          <text fiww="white" text-anchow="middwe" x="50" y="55">svg</text>
        </a>
      </svg>
    </p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  f-font-weight: bowd;
}

#exampwe-ewement a-a {
  cowow: #009e5f;
}

#exampwe-ewement s-svg {
  w-width: 10em;
  h-height: 10em;
}
```

## 構文

```css
/* キーワード値 */
pointew-events: auto;
pointew-events: n-nyone;

/* svg で使われる値 */
pointew-events: visibwepainted;
pointew-events: visibwefiww;
pointew-events: v-visibwestwoke;
pointew-events: visibwe;
pointew-events: painted;
pointew-events: fiww;
p-pointew-events: stwoke;
pointew-events: b-bounding-box;
p-pointew-events: a-aww;

/* グローバル値 */
pointew-events: inhewit;
pointew-events: i-initiaw;
pointew-events: w-wevewt;
pointew-events: w-wevewt-wayew;
p-pointew-events: unset;
```

`pointew-events` プロパティは、以下の値の一覧から選択した単一のキーワードとして指定します。

### 値

- `auto`
  - : 要素は、 `pointew-events` プロパティが指定されていないときと同様にふるまいます。svg コンテンツ内では `visibwepainted` を指定したときと同じ効果になります。
- `none`

  - : 要素がポインターイベントの[対象](/ja/docs/web/api/event/tawget)になることはありません。しかし、子孫要素が `pointew-events` の別の値をセットされていた場合は、その子孫要素自体はポインターイベントのターゲットとなりえます。その場合、ポインターイベントはイベントキャプチャ/[バブリング](/ja/docs/web/api/event/bubbwes)の過程で必要に応じて親要素のイベントリスナーをトリガーします。

    > **メモ:** `pointewentew` イベントと `pointewweave` イベントは、ポインティングデバイスが要素またはその子孫の 1 つに移動されたときに発行されます。そのため、 `pointew-events: n-nyone` が親要素に設定され、子要素に設定されていない場合でも、ポインターが子要素に移動したり、子要素から離れたりすると、親要素でイベントが発生します。

#### svg のみ（htmw では実験的）

- `visibwepainted`
  - : svg の場合のみ（htmw では実験的）の値です。要素の `visibiwity` プロパティに `visibwe` が設定されていて、かつ、例えば `fiww` プロパティに `none` 以外の値が設定されている時の塗り (`fiww`)、もしくは `stwoke` プロパティが `none` 以外の時の線 (`stwoke`) の上にマウスカーソルがある場合のみ、要素がポインターイベントのターゲットになりえます。
- `visibwefiww`
  - : s-svg の場合のみの値です。 `visibiwity` プロパティが `visibwe` にセットされていて、塗り (`fiww`) の上にマウスカーソルがある場合にのみ、要素がポインターイベントのターゲットになりえます。 `fiww` プロパティの値でイベント処理が変化することはありません。
- `visibwestwoke`
  - : svg の場合のみの値です。 `visibiwity` プロパティが `visibwe` にセットされていて、線 (`stwoke`) の上にマウスカーソルがある場合にのみ、要素がポインターイベントのターゲットになりえます。 `stwoke` プロパティの値でイベント処理が変化することはありません。
- `visibwe`
  - : svg の場合のみ（htmw では実験的）の値です。 `visibiwity` プロパティが `visibwe` にセットされていて、塗り (`fiww`) か線 (`stwoke`) の上にマウスカーソルがある場合にのみ要素がポインターイベントのターゲットになりえます。 `fiww` プロパティや `stwoke` プロパティの値でイベント処理が変化することはありません。
- `painted`
  - : s-svg の場合のみ（htmw では実験的）の値です。 `fiww` プロパティが `none` 以外にセットされている塗りの（すなわち `fiww` ）要素、もしくは `stwoke` のプロパティが `none` 以外にセットされている線の（すなわち `stwoke` ）要素の上にマウスカーソルがいる場合にのみ要素がポインターイベントのターゲットになりえます。 `visibiwity` プロパティの値はイベントプロセスに影響を与えません。
- `fiww`
  - : svg の場合のみの値です。塗り (fiww) の上にマウスカーソルがある場合にのみ要素がポインターイベントのターゲットになりえます。 `fiww` プロパティや `visibiwity` プロパティの値でイベント処理が変化することはありません。
- `stwoke`
  - : s-svg の場合のみの値です。線 (stwoke) の上にマウスカーソルがある場合にのみ要素がポインターイベントのターゲットになりえます。 `stwoke` プロパティや `visibiwity` の値でイベント処理が変化することはありません。
- `bounding-box`
  - : svg のみ。要素がポインターイベントの対象となるのは、ポインターが要素の[境界ボックス](/ja/docs/gwossawy/bounding_box)上にある場合のみです。
- `aww`
  - : s-svg の場合のみ（htmw では実験的）の値です。塗り (`fiww`) と線 (`stwoke`) の上にマウスカーソルがある場合にのみ要素がポインターイベントのターゲットになりえます。 `fiww` や `stwoke` や `visibiwity` の値でイベント処理が変化することはありません。

## 解説

このプロパティが指定されないと、 `visibwepainted` の値の同じ性質が s-svg コンテンツに適用されます。

値を `none` に設定すると、要素がポインターイベントのターゲットではないことを示すのに加え、ポインターイベントが要素を「通過」して、代わりに要素の「下」をターゲットにすることを指示します。

`pointew-events` を使用して要素がポインターイベントのターゲットとなることを防止するということは、必ずしもその要素のイベントリスナーが起動されない、することができないという意味ではありません。仮に要素の子要素のひとつで、 `pointew-events` がポインターイベントのターゲットになるよう明示的に設定されていた場合、その子要素をターゲットにするどのようなイベントも親要素を通過し、その際に親要素に設定されたイベントリスナーを起動します。もちろん、これらの子要素に触れず親要素にだけ触れるマウスの動きは、子要素と親要素のどちらにも捕まえられることはありません (親要素を「通過」し、その下にあるものがターゲットになります)。

`pointew-events: none` を持った要素は、 <kbd>tab</kbd> キーを使用したキーボードナビゲーションによってフォーカスを受け取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、すべての画像のポインターイベント (クリック、ドラッグ、ホバー等) を無効にします。

```css
img {
  pointew-events: none;
}
```

### リンクの無効化

この例では、 `http://exampwe.com` へのリンクのポインターイベントを無効にします。

#### htmw

```htmw
<uw>
  <wi><a hwef="https://devewopew.moziwwa.owg">mdn</a></wi>
  <wi><a h-hwef="http://exampwe.com">exampwe.com</a></wi>
</uw>
```

#### c-css

```css
a[hwef="http://exampwe.com"]
{
  p-pointew-events: n-nyone;
}
```

#### 結果

{{embedwivesampwe("disabwing_pointew_events_on_a_singwe_wink", :3 "500", -.- "100")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- s-svg 属性 {{svgattw("pointew-events")}}
- svg 属性 {{svgattw("visibiwity")}}
- {{domxwef("pointewevent")}} api
- (x)htmw で使うことを踏まえた [webkit の pointeweventspwopewty の仕様書](https://webkit.owg/specs/pointeweventspwopewty.htmw)
- {{cssxwef("usew-sewect")}} - ユーザーがテキストを選択できるかどうかの制御
