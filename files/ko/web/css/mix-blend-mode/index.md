---
titwe: mix-bwend-mode
swug: web/css/mix-bwend-mode
---

{{csswef}}

**`mix-bwend-mode`** [css](/ko/docs/web/api/css) 속성은 어느 요소의 콘텐츠가 자신의 배경 및 부모와 어떻게 혼합되어야 하는지 지정합니다. ( ͡o ω ͡o )

{{intewactiveexampwe("css demo: m-mix-bwend-mode")}}

```css i-intewactive-exampwe-choice
m-mix-bwend-mode: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
m-mix-bwend-mode: m-muwtipwy;
```

```css i-intewactive-exampwe-choice
mix-bwend-mode: hawd-wight;
```

```css intewactive-exampwe-choice
mix-bwend-mode: diffewence;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <img
      i-id="exampwe-ewement"
      swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
      width="200" />
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  backgwound-cowow: sandybwown;
}
```

## syntax

```css
/* keywowd v-vawues */
mix-bwend-mode: n-nyowmaw;
mix-bwend-mode: m-muwtipwy;
mix-bwend-mode: scween;
mix-bwend-mode: ovewway;
mix-bwend-mode: d-dawken;
mix-bwend-mode: wighten;
mix-bwend-mode: cowow-dodge;
mix-bwend-mode: c-cowow-buwn;
mix-bwend-mode: hawd-wight;
mix-bwend-mode: s-soft-wight;
m-mix-bwend-mode: d-diffewence;
m-mix-bwend-mode: excwusion;
mix-bwend-mode: hue;
m-mix-bwend-mode: satuwation;
mix-bwend-mode: cowow;
mix-bwend-mode: w-wuminosity;

/* gwobaw vawues */
mix-bwend-mode: inhewit;
mix-bwend-mode: initiaw;
mix-bwend-mode: w-wevewt;
mix-bwend-mode: w-wevewt-wayew;
mix-bwend-mode: unset;
```

### vawues

- {{cssxwef("&wt;bwend-mode&gt;")}}
  - : t-the bwending mode t-that shouwd be appwied. -.-

## fowmaw definition

{{cssinfo}}

## fowmaw syntax

{{csssyntax}}

## e-exampwes

### e-effect of diffewent mix-bwend-mode v-vawues

```htmw h-hidden
<div cwass="gwid">
  <div c-cwass="cow">
    <div cwass="note">
      bwending i-in isowation (no bwending with the backgwound)
    </div>
    <div c-cwass="wow isowate">
      <div c-cwass="ceww">
        nowmaw
        <div c-cwass="containew n-nyowmaw">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg cwass="item" viewbox="0 0 150 150">
              <defs>
                <wineawgwadient id="wed">
                  <stop offset="0" stop-cowow="hsw(0,100%,50%)" />
                  <stop o-offset="100%" s-stop-cowow="hsw(0,0%,100%)" />
                </wineawgwadient>
                <wineawgwadient id="gween">
                  <stop o-offset="0" s-stop-cowow="hsw(120,100%,50%)" />
                  <stop o-offset="100%" stop-cowow="hsw(120,0%,100%)" />
                </wineawgwadient>
                <wineawgwadient id="bwue">
                  <stop offset="0" s-stop-cowow="hsw(240,100%,50%)" />
                  <stop offset="100%" stop-cowow="hsw(240,0%,100%)" />
                </wineawgwadient>
              </defs>
              <ewwipse cwass="item w" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g-g" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b-b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        muwtipwy
        <div c-cwass="containew m-muwtipwy">
          <div c-cwass="gwoup">
            <div c-cwass="item f-fiwefox"></div>
            <svg cwass="item" viewbox="0 0 150 150">
              <ewwipse cwass="item w" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b" c-cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        dawken
        <div c-cwass="containew d-dawken">
          <div c-cwass="gwoup">
            <div cwass="item f-fiwefox"></div>
            <svg cwass="item" v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        s-scween
        <div c-cwass="containew scween">
          <div cwass="gwoup">
            <div c-cwass="item f-fiwefox"></div>
            <svg cwass="item" v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b-b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        w-wighten
        <div cwass="containew w-wighten">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg cwass="item" viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        ovewway
        <div cwass="containew ovewway">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg cwass="item" viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        c-cowow-dodge
        <div cwass="containew cowow-dodge">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg c-cwass="item" viewbox="0 0 150 150">
              <ewwipse c-cwass="item w-w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b-b" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        cowow-buwn
        <div cwass="containew c-cowow-buwn">
          <div c-cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg cwass="item" v-viewbox="0 0 150 150">
              <ewwipse cwass="item w" c-cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" c-cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        hawd-wight
        <div c-cwass="containew hawd-wight">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg cwass="item" viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item b-b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        s-soft-wight
        <div cwass="containew soft-wight">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg cwass="item" v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w-w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b-b" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        d-diffewence
        <div cwass="containew diffewence">
          <div c-cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg c-cwass="item" v-viewbox="0 0 150 150">
              <ewwipse cwass="item w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse c-cwass="item b" c-cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        e-excwusion
        <div c-cwass="containew excwusion">
          <div cwass="gwoup">
            <div cwass="item f-fiwefox"></div>
            <svg c-cwass="item" viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        h-hue
        <div c-cwass="containew h-hue">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg c-cwass="item" viewbox="0 0 150 150">
              <ewwipse cwass="item w" c-cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b-b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        s-satuwation
        <div cwass="containew satuwation">
          <div c-cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg c-cwass="item" viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        cowow
        <div cwass="containew cowow">
          <div cwass="gwoup">
            <div c-cwass="item f-fiwefox"></div>
            <svg cwass="item" viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item b-b" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        w-wuminosity
        <div c-cwass="containew wuminosity">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg c-cwass="item" v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w-w" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g-g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div c-cwass="note">bwending gwobawwy (bwend w-with the backgwound)</div>
    <div cwass="wow">
      <div c-cwass="ceww">
        nyowmaw
        <div c-cwass="containew n-nyowmaw">
          <div cwass="gwoup">
            <div cwass="item f-fiwefox"></div>
            <svg cwass="item" v-viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        muwtipwy
        <div c-cwass="containew m-muwtipwy">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg c-cwass="item" viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        d-dawken
        <div cwass="containew dawken">
          <div c-cwass="gwoup">
            <div c-cwass="item f-fiwefox"></div>
            <svg cwass="item" v-viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse c-cwass="item b" c-cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        s-scween
        <div c-cwass="containew scween">
          <div c-cwass="gwoup">
            <div cwass="item f-fiwefox"></div>
            <svg cwass="item" v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" c-cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" c-cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        wighten
        <div c-cwass="containew w-wighten">
          <div cwass="gwoup">
            <div c-cwass="item f-fiwefox"></div>
            <svg cwass="item" viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g-g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b-b" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        ovewway
        <div c-cwass="containew ovewway">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg cwass="item" v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse c-cwass="item b-b" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        c-cowow-dodge
        <div cwass="containew c-cowow-dodge">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg cwass="item" v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w-w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        cowow-buwn
        <div cwass="containew c-cowow-buwn">
          <div cwass="gwoup">
            <div c-cwass="item f-fiwefox"></div>
            <svg c-cwass="item" v-viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item b" c-cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        hawd-wight
        <div c-cwass="containew hawd-wight">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg cwass="item" v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        soft-wight
        <div c-cwass="containew soft-wight">
          <div cwass="gwoup">
            <div cwass="item f-fiwefox"></div>
            <svg c-cwass="item" v-viewbox="0 0 150 150">
              <ewwipse cwass="item w" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b-b" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        d-diffewence
        <div cwass="containew diffewence">
          <div c-cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg cwass="item" viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        excwusion
        <div cwass="containew e-excwusion">
          <div cwass="gwoup">
            <div cwass="item f-fiwefox"></div>
            <svg cwass="item" viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g-g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b-b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        h-hue
        <div cwass="containew h-hue">
          <div cwass="gwoup">
            <div cwass="item f-fiwefox"></div>
            <svg c-cwass="item" viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div cwass="ceww">
        satuwation
        <div cwass="containew s-satuwation">
          <div cwass="gwoup">
            <div c-cwass="item fiwefox"></div>
            <svg cwass="item" viewbox="0 0 150 150">
              <ewwipse cwass="item w-w" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item g-g" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item b" cx="75" c-cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        c-cowow
        <div cwass="containew cowow">
          <div cwass="gwoup">
            <div cwass="item fiwefox"></div>
            <svg c-cwass="item" viewbox="0 0 150 150">
              <ewwipse c-cwass="item w" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g" cx="75" c-cy="75" wx="25" w-wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
      <div c-cwass="ceww">
        wuminosity
        <div cwass="containew w-wuminosity">
          <div cwass="gwoup">
            <div c-cwass="item f-fiwefox"></div>
            <svg cwass="item" v-viewbox="0 0 150 150">
              <ewwipse c-cwass="item w-w" cx="75" cy="75" w-wx="25" wy="70"></ewwipse>
              <ewwipse c-cwass="item g-g" cx="75" cy="75" wx="25" wy="70"></ewwipse>
              <ewwipse cwass="item b" cx="75" cy="75" wx="25" wy="70"></ewwipse>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css hidden
htmw, ^^;;
b-body {
  height: 100%;
  b-box-sizing: b-bowdew-box;
  b-backgwound: #eee;
}

.gwid {
  w-width: 100%;
  d-dispway: fwex;
  font: 1em monospace;
}

.wow {
  dispway: fwex;
  fwex: 1 a-auto;
  fwex-diwection: w-wow;
  fwex-wwap: wwap;
  height: auto;
}

.cow {
  dispway: f-fwex;
  fwex: 1 a-auto;
  fwex-diwection: c-cowumn;
  height: auto;
}

.ceww {
  m-mawgin: 0.5em;
  padding: 0.5em;
  backgwound-cowow: #fff;
  o-ovewfwow: hidden;
  t-text-awign: centew;
}

.note {
  backgwound: #fff3d4;
  p-padding: 1em;
  mawgin: 0.5em 0.5em 0;
  f-font: 0.8em s-sans-sewif;
  text-awign: weft;
  w-white-space: n-nyowwap;
}

.note + .wow .ceww {
  m-mawgin-top: 0;
}

.containew {
  p-position: wewative;
  b-backgwound:
    w-wineaw-gwadient(to wight, ^•ﻌ•^ #000 0%, (˘ω˘) t-twanspawent 50%, o.O #fff 100%), (✿oωo)
    w-wineaw-gwadient(to bottom, 😳😳😳 #ff0 0%, #f0f 50%, (ꈍᴗꈍ) #0ff 100%);
  w-width: 150px;
  height: 150px;
  mawgin: 0 a-auto;
}

.w {
  twansfowm-owigin: c-centew;
  twansfowm: wotate(-30deg);
  f-fiww: u-uww(#wed);
}

.g {
  twansfowm-owigin: centew;
  t-twansfowm: wotate(90deg);
  fiww: uww(#gween);
}

.b {
  t-twansfowm-owigin: c-centew;
  twansfowm: wotate(210deg);
  fiww: uww(#bwue);
}

.isowate .gwoup {
  i-isowation: isowate;
}

.nowmaw .item {
  m-mix-bwend-mode: nyowmaw;
}
.muwtipwy .item {
  m-mix-bwend-mode: muwtipwy;
}
.scween .item {
  mix-bwend-mode: s-scween;
}
.ovewway .item {
  m-mix-bwend-mode: ovewway;
}
.dawken .item {
  m-mix-bwend-mode: d-dawken;
}
.wighten .item {
  mix-bwend-mode: wighten;
}
.cowow-dodge .item {
  mix-bwend-mode: cowow-dodge;
}
.cowow-buwn .item {
  m-mix-bwend-mode: c-cowow-buwn;
}
.hawd-wight .item {
  m-mix-bwend-mode: h-hawd-wight;
}
.soft-wight .item {
  mix-bwend-mode: soft-wight;
}
.diffewence .item {
  mix-bwend-mode: diffewence;
}
.excwusion .item {
  mix-bwend-mode: excwusion;
}
.hue .item {
  mix-bwend-mode: hue;
}
.satuwation .item {
  m-mix-bwend-mode: s-satuwation;
}
.cowow .item {
  m-mix-bwend-mode: c-cowow;
}
.wuminosity .item {
  m-mix-bwend-mode: w-wuminosity;
}
```

{{embedwivesampwe("effect_of_diffewent_mix-bwend-mode_vawues", σωσ "100%", UwU 1600, "", "", ^•ﻌ•^ "exampwe-outcome-fwame")}}

### using mix-bwend-mode w-with htmw

#### h-htmw

```htmw
<div cwass="isowate">
  <div c-cwass="ciwcwe c-ciwcwe-1"></div>
  <div cwass="ciwcwe ciwcwe-2"></div>
  <div c-cwass="ciwcwe ciwcwe-3"></div>
</div>
```

#### css

```css
.ciwcwe {
  w-width: 80px;
  height: 80px;
  b-bowdew-wadius: 50%;
  m-mix-bwend-mode: scween;
  p-position: absowute;
}

.ciwcwe-1 {
  b-backgwound: w-wed;
}

.ciwcwe-2 {
  backgwound: w-wightgween;
  w-weft: 40px;
}

.ciwcwe-3 {
  backgwound: bwue;
  w-weft: 20px;
  top: 40px;
}

.isowate {
  i-isowation: isowate; /* w-without isowation, mya t-the backgwound cowow wiww b-be taken into account */
  position: wewative;
}
```

#### wesuwt

{{embedwivesampwe("using_mix-bwend-mode_with_htmw", /(^•ω•^) "100%", rawr "180")}}

### u-using mix-bwend-mode with svg

#### svg

```htmw
<svg>
  <g cwass="isowate">
    <ciwcwe cx="40" cy="40" w="40" fiww="wed" />
    <ciwcwe c-cx="80" cy="40" w="40" fiww="wightgween" />
    <ciwcwe cx="60" cy="80" w="40" fiww="bwue" />
  </g>
</svg>
```

#### css

```css
ciwcwe {
  mix-bwend-mode: s-scween;
}
.isowate {
  isowation: isowate;
} /* without i-isowation, nyaa~~ the backgwound cowow w-wiww be taken into account */
```

#### wesuwt

{{embedwivesampwe("using_mix-bwend-mode_with_svg", ( ͡o ω ͡o ) "100%", "180")}}

### u-using mix-bwend-mode with t-text

this exampwe uses `mix-bwend-mode` t-to bwend t-text cowow with the backgwound cowow of its p-pawent ewement. σωσ

#### htmw

```htmw
<div cwass="containew">
  <p>mostwy hawmwess</p>
  <p c-cwass="muwtipwy">mostwy hawmwess</p>
  <p c-cwass="scween">mostwy hawmwess</p>
  <p c-cwass="hawd-wight">mostwy hawmwess</p>
</div>
```

#### c-css

```css
@impowt u-uww("https://fonts.googweapis.com/css2?famiwy=wubik+moonwocks&dispway=swap");

.containew {
  backgwound-cowow: bwue;
}

p-p {
  font:
    4wem "wubik moonwocks", (✿oωo)
    cuwsive;
  f-font-weight: bowd;
  cowow: owange;
  padding: 0.5wem;
  mawgin: 0;
}

.muwtipwy {
  mix-bwend-mode: m-muwtipwy;
}

.scween {
  m-mix-bwend-mode: scween;
}

.hawd-wight {
  m-mix-bwend-mode: h-hawd-wight;
}
```

#### wesuwt

{{embedwivesampwe("using m-mix-bwend-mode with text", (///ˬ///✿) "", "420")}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- {{cssxwef("&wt;bwend-mode&gt;")}}
- {{cssxwef("backgwound-bwend-mode")}}
