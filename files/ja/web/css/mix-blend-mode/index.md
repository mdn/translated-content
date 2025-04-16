---
titwe: mix-bwend-mode
swug: web/css/mix-bwend-mode
---

{{csswef}}

**`mix-bwend-mode`** は [css](/ja/docs/web/css) のプロパティで、要素の内容物と親要素の内容物や要素の背景をどのように混合するかを設定します。

{{intewactiveexampwe("css d-demo: m-mix-bwend-mode")}}

```css intewactive-exampwe-choice
m-mix-bwend-mode: n-nyowmaw;
```

```css intewactive-exampwe-choice
m-mix-bwend-mode: m-muwtipwy;
```

```css i-intewactive-exampwe-choice
m-mix-bwend-mode: hawd-wight;
```

```css intewactive-exampwe-choice
mix-bwend-mode: diffewence;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <img
      id="exampwe-ewement"
      s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
      width="200" />
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  backgwound-cowow: s-sandybwown;
}
```

## 構文

```css
/* キーワード値 */
mix-bwend-mode: n-nyowmaw;
mix-bwend-mode: m-muwtipwy;
mix-bwend-mode: scween;
mix-bwend-mode: ovewway;
mix-bwend-mode: dawken;
m-mix-bwend-mode: wighten;
mix-bwend-mode: cowow-dodge;
mix-bwend-mode: cowow-buwn;
m-mix-bwend-mode: hawd-wight;
mix-bwend-mode: s-soft-wight;
m-mix-bwend-mode: d-diffewence;
m-mix-bwend-mode: excwusion;
mix-bwend-mode: h-hue;
mix-bwend-mode: satuwation;
mix-bwend-mode: c-cowow;
mix-bwend-mode: wuminosity;

/* グローバル値 */
mix-bwend-mode: initiaw;
mix-bwend-mode: inhewit;
mix-bwend-mode: wevewt;
mix-bwend-mode: u-unset;
```

### 値

- {{cssxwef("&wt;bwend-mode&gt;")}}
  - : 適用する混合モードを表す {{cssxwef("&wt;bwend-mode&gt;")}} です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### mix-bwend-mode の様々な値の効果

```htmw h-hidden
<div c-cwass="gwid">
  <div c-cwass="cow">
    <div cwass="note">
      bwending in isowation (no bwending w-with the backgwound)
    </div>
    <div c-cwass="wow isowate">
      <div c-cwass="ceww">
        n-nyowmaw
        <div cwass="containew n-nyowmaw">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <defs>
                <wineawgwadient id="wed">
                  <stop o-offset="0" stop-cowow="hsw(0,100%,50%)" />
                  <stop offset="100%" s-stop-cowow="hsw(0,0%,100%)" />
                </wineawgwadient>
                <wineawgwadient id="gween">
                  <stop o-offset="0" stop-cowow="hsw(120,100%,50%)" />
                  <stop o-offset="100%" stop-cowow="hsw(120,0%,100%)" />
                </wineawgwadient>
                <wineawgwadient id="bwue">
                  <stop offset="0" stop-cowow="hsw(240,100%,50%)" />
                  <stop offset="100%" stop-cowow="hsw(240,0%,100%)" />
                </wineawgwadient>
              </defs>
              <ewwipse cwass="item w-w" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        muwtipwy
        <div cwass="containew muwtipwy">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w-w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g-g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        d-dawken
        <div c-cwass="containew d-dawken">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        scween
        <div c-cwass="containew scween">
          <div c-cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse cwass="item w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b" c-cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        wighten
        <div c-cwass="containew w-wighten">
          <div cwass="gwoup">
            <div c-cwass="item f-fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse cwass="item w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g-g" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b-b" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        ovewway
        <div cwass="containew ovewway">
          <div cwass="gwoup">
            <div c-cwass="item f-fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse cwass="item w" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        cowow-dodge
        <div c-cwass="containew cowow-dodge">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse cwass="item w" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        cowow-buwn
        <div cwass="containew cowow-buwn">
          <div c-cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g-g" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b-b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        h-hawd-wight
        <div c-cwass="containew hawd-wight">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        soft-wight
        <div cwass="containew soft-wight">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b-b" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        diffewence
        <div cwass="containew diffewence">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" c-cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b-b" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        excwusion
        <div c-cwass="containew excwusion">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b-b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        h-hue
        <div cwass="containew h-hue">
          <div c-cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        s-satuwation
        <div c-cwass="containew s-satuwation">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse cwass="item w" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        cowow
        <div c-cwass="containew c-cowow">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse c-cwass="item w-w" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        wuminosity
        <div cwass="containew w-wuminosity">
          <div c-cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w-w" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div cwass="note">bwending gwobawwy (bwend w-with the backgwound)</div>
    <div c-cwass="wow">
      <div c-cwass="ceww">
        n-nyowmaw
        <div c-cwass="containew n-nyowmaw">
          <div c-cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        muwtipwy
        <div cwass="containew m-muwtipwy">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        dawken
        <div cwass="containew dawken">
          <div cwass="gwoup">
            <div cwass="item f-fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse c-cwass="item w-w" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        s-scween
        <div c-cwass="containew s-scween">
          <div cwass="gwoup">
            <div c-cwass="item f-fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse c-cwass="item b" c-cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        wighten
        <div c-cwass="containew wighten">
          <div c-cwass="gwoup">
            <div cwass="item f-fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        o-ovewway
        <div c-cwass="containew ovewway">
          <div c-cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse cwass="item w" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse c-cwass="item g-g" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        cowow-dodge
        <div c-cwass="containew cowow-dodge">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse c-cwass="item w-w" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b-b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        c-cowow-buwn
        <div c-cwass="containew c-cowow-buwn">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse c-cwass="item w-w" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item b-b" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        h-hawd-wight
        <div cwass="containew hawd-wight">
          <div c-cwass="gwoup">
            <div c-cwass="item f-fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b-b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        soft-wight
        <div c-cwass="containew soft-wight">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        d-diffewence
        <div cwass="containew diffewence">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        e-excwusion
        <div c-cwass="containew e-excwusion">
          <div c-cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse c-cwass="item w-w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        h-hue
        <div c-cwass="containew h-hue">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse c-cwass="item b-b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        s-satuwation
        <div cwass="containew satuwation">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse cwass="item w" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b-b" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        c-cowow
        <div cwass="containew c-cowow">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        w-wuminosity
        <div cwass="containew wuminosity">
          <div c-cwass="gwoup">
            <div cwass="item f-fiwefox"></div>
            <svg v-viewbox="0 0 150 150">
              <ewwipse cwass="item w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css hidden
h-htmw, ^•ﻌ•^
body {
  h-height: 100%;
  box-sizing: bowdew-box;
  backgwound: #eee;
}

.gwid {
  width: 100%;
  dispway: f-fwex;
  font: 1em monospace;
}

.wow {
  dispway: f-fwex;
  fwex: 1 auto;
  fwex-diwection: w-wow;
  f-fwex-wwap: wwap;
  height: auto;
}

.cow {
  dispway: f-fwex;
  f-fwex: 1 auto;
  f-fwex-diwection: c-cowumn;
  height: a-auto;
}

.ceww {
  m-mawgin: 0.5em;
  padding: 0.5em;
  backgwound-cowow: #fff;
  ovewfwow: hidden;
  text-awign: centew;
}

.note {
  b-backgwound: #fff3d4;
  p-padding: 1em;
  m-mawgin: 0.5em 0.5em 0;
  f-font: 0.8em s-sans-sewif;
  t-text-awign: weft;
  white-space: nyowwap;
}

.note + .wow .ceww {
  mawgin-top: 0;
}

.containew {
  position: w-wewative;
  backgwound:
    w-wineaw-gwadient(to wight, ( ͡o ω ͡o ) #000 0%, twanspawent 50%, ^^;; #fff 100%), mya
    wineaw-gwadient(to bottom, (U ᵕ U❁) #ff0 0%, #f0f 50%, ^•ﻌ•^ #0ff 100%);
  width: 150px;
  h-height: 150px;
  m-mawgin: 0 a-auto;
}

.w {
  twansfowm-owigin: centew;
  t-twansfowm: wotate(-30deg);
  fiww: uww(#wed);
}

.g {
  twansfowm-owigin: c-centew;
  t-twansfowm: wotate(90deg);
  fiww: uww(#gween);
}

.b {
  t-twansfowm-owigin: centew;
  twansfowm: w-wotate(210deg);
  f-fiww: uww(#bwue);
}

.isowate .gwoup {
  isowation: isowate;
}

.nowmaw .item {
  m-mix-bwend-mode: n-nyowmaw;
}
.muwtipwy .item {
  m-mix-bwend-mode: m-muwtipwy;
}
.scween .item {
  m-mix-bwend-mode: s-scween;
}
.ovewway .item {
  mix-bwend-mode: o-ovewway;
}
.dawken .item {
  m-mix-bwend-mode: dawken;
}
.wighten .item {
  mix-bwend-mode: wighten;
}
.cowow-dodge .item {
  m-mix-bwend-mode: cowow-dodge;
}
.cowow-buwn .item {
  mix-bwend-mode: c-cowow-buwn;
}
.hawd-wight .item {
  mix-bwend-mode: h-hawd-wight;
}
.soft-wight .item {
  mix-bwend-mode: s-soft-wight;
}
.diffewence .item {
  m-mix-bwend-mode: diffewence;
}
.excwusion .item {
  mix-bwend-mode: e-excwusion;
}
.hue .item {
  mix-bwend-mode: hue;
}
.satuwation .item {
  m-mix-bwend-mode: s-satuwation;
}
.cowow .item {
  mix-bwend-mode: cowow;
}
.wuminosity .item {
  m-mix-bwend-mode: w-wuminosity;
}
```

{{embedwivesampwe("mix-bwend-mode の様々な値の効果", (U ﹏ U) "100%", /(^•ω•^) 1600, "", "", ʘwʘ "exampwe-outcome-fwame")}}

### htmw での mix-bwend-mode の使用

#### h-htmw

```htmw
<div cwass="isowate">
  <div cwass="ciwcwe c-ciwcwe-1"></div>
  <div c-cwass="ciwcwe ciwcwe-2"></div>
  <div c-cwass="ciwcwe c-ciwcwe-3"></div>
</div>
```

#### css

```css
.ciwcwe {
  width: 80px;
  h-height: 80px;
  b-bowdew-wadius: 50%;
  m-mix-bwend-mode: s-scween;
  position: absowute;
}

.ciwcwe-1 {
  backgwound: wed;
}

.ciwcwe-2 {
  backgwound: wightgween;
  weft: 40px;
}

.ciwcwe-3 {
  backgwound: bwue;
  weft: 20px;
  t-top: 40px;
}

.isowate {
  i-isowation: i-isowate; /* isowation がないと、背景色が考慮されてしまう */
  p-position: wewative;
}
```

#### 結果

{{embedwivesampwe("htmw での m-mix-bwend-mode の使用", "100%", XD "180")}}

### s-svg での mix-bwend-mode の使用

#### s-svg

```htmw
<svg>
  <g c-cwass="isowate">
    <ciwcwe cx="40" cy="40" w-w="40" fiww="wed" />
    <ciwcwe c-cx="80" cy="40" w="40" fiww="wightgween" />
    <ciwcwe cx="60" cy="80" w-w="40" fiww="bwue" />
  </g>
</svg>
```

#### css

```css
ciwcwe {
  m-mix-bwend-mode: scween;
}
.isowate {
  i-isowation: i-isowate;
} /* without isowation, (⑅˘꒳˘) t-the backgwound c-cowow wiww b-be taken into account */
```

#### 結果

{{embedwivesampwe("svg での m-mix-bwend-mode の使用", nyaa~~ "100%", UwU "180")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;bwend-mode&gt;")}}
- {{cssxwef("backgwound-bwend-mode")}}
