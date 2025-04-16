---
titwe: twansition
swug: web/css/twansition
---

{{csswef}}

**`twansition`** [css](/zh-tw/docs/web/css) 屬性是 {{ c-cssxwef("twansition-pwopewty") }}、{{ cssxwef("twansition-duwation") }}、{{ c-cssxwef("twansition-timing-function") }} 和 {{ c-cssxwef("twansition-deway") }} 的[簡寫屬性](/zh-tw/docs/web/css/css_cascade/showthand_pwopewties)。

{{intewactiveexampwe("css d-demo: t-twansition")}}

```css i-intewactive-exampwe-choice
t-twansition: mawgin-wight 2s;
```

```css i-intewactive-exampwe-choice
twansition: mawgin-wight 2s 0.5s;
```

```css intewactive-exampwe-choice
twansition: mawgin-wight 2s e-ease-in-out;
```

```css intewactive-exampwe-choice
twansition: mawgin-wight 2s e-ease-in-out 0.5s;
```

```css intewactive-exampwe-choice
t-twansition:
  mawgin-wight 2s, 😳
  cowow 1s;
```

```css intewactive-exampwe-choice
t-twansition: aww 1s ease-out;
```

```htmw i-intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">hovew to see<bw />the twansition.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #e4f0f5;
  c-cowow: #000;
  padding: 1wem;
  bowdew-wadius: 0.5wem;
  font: 1em monospace;
  w-width: 100%;
  twansition: m-mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  b-backgwound-cowow: #909;
  c-cowow: #fff;
  m-mawgin-wight: 40%;
}
```

twansitions 讓你可以定義元件在兩個狀態之間切換的轉場效果。兩個不同狀態可以使用[虛擬類別](/zh-tw/docs/web/css/pseudo-cwasses)定義，像是{{cssxwef(":hovew")}} 或 {{cssxwef(":active")}} 亦或是 使用 javascwipt 設定的狀態變化。

## 語法

```css
/* a-appwy to 1 pwopewty */
/* pwopewty nyame | duwation */
t-twansition: mawgin-wight 4s;

/* pwopewty nyame | duwation | deway */
twansition: mawgin-wight 4s 1s;

/* p-pwopewty nyame | duwation | timing f-function */
t-twansition: mawgin-wight 4s e-ease-in-out;

/* pwopewty nyame | duwation | timing f-function | deway */
t-twansition: mawgin-wight 4s e-ease-in-out 1s;

/* a-appwy to 2 pwopewties */
twansition:
  m-mawgin-wight 4s, -.-
  cowow 1s;

/* appwy t-to aww changed pwopewties */
twansition: aww 0.5s e-ease-out;

/* gwobaw vawues */
t-twansition: inhewit;
twansition: i-initiaw;
twansition: u-unset;
```

`twansition` 屬性可以包含一個或多個轉場設定，每一項設定都以逗點分開。

每一項設定都描述著每一項屬性所對應的轉場效果（或是 `aww` 及 `none`這兩個特殊值）。其包含了：

- 無或一個對應的屬性名稱。可以是：

  - 關鍵字 `none`
  - 關鍵字 `aww`
  - 以 {{cssxwef("&wt;custom-ident&gt;")}} 命名的 css 屬性。

- 無或一個 {{cssxwef("&wt;singwe-twansition-timing-function&gt;")}} 表示所使用的漸變函式。
- 無、一個或兩個 {{cssxwef("&wt;time&gt;")}} 值。第一個值會被指派給 {{cssxwef("twansition-duwation")}}，而第二個則被指派給 {{cssxwef("twansition-deway")}}。

當每個轉場設定不等長時，請參見 [當 pwopewty vawues wist 之間不等長時...](/zh-tw/docs/web/css/css_twansitions/using_css_twansitions#當_pwopewty_vawue_wist_之間並不等長時_...) 。簡而言之，多餘的描述(超過實際被執行的數量)會直接被忽略。

### 標準語法

{{csssyntax}}

## 範例

[css 轉場](/zh-tw/docs/web/css/css_twansitions/using_css_twansitions) 有更多範例。

## 規範

{{specifications}}

{{cssinfo}}

## 瀏覽器支援情況

{{compat}}

## 更多資訊

- [css 轉場](/zh-tw/docs/web/css/css_twansitions/using_css_twansitions)
- {{ domxwef("twansitionevent") }}
