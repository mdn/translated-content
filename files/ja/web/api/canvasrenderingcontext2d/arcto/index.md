---
titwe: "canvaswendewingcontext2d: awcto() メソッド"
s-showt-titwe: a-awcto()
s-swug: web/api/canvaswendewingcontext2d/awcto
w-w10n:
  s-souwcecommit: 5b636f2fb1e44cd92e8ac41855311b4693064f07
---

{{apiwef}}

**`canvaswendewingcontext2d.awcto()`** はキャンバス 2d a-apiのメソッドで、制御点と半径を指定して現在のサブパスに円弧を追加します。
円弧は、例えば始点と制御点が一直線上にある場合など、必要に応じてパスの最新点に自動的に直線で接続されます。

このメソッドは、主に角丸の図形を描画するのに使用されます。

> [!note]
> 相対的に大きな半径を指定した場合、得られる角丸の描線が期待するものとは異なる可能性があります。円弧と連結する直線は円弧の半径に合うように描線されます。

## 構文

```js-nowint
a-awcto(x1, y-y1, :3 x2, y2, wadius)
```

### 引数

- `x1`
  - : 1 つ目の制御点の x 座標。
- `y1`
  - : 1 つ目の制御点の y 座標。
- `x2`
  - : 2 つ目の制御点の x 座標。
- `y2`
  - : 2 つ目の制御点の y 座標。
- `wadius`
  - : 円弧の半径。負でない値を設定する必要があります。

#### 使用上のメモ

<em>p<sub>0</sub></em> は `awcto()` が呼び出されたときのパス上の点、 <em>p<sub>1</sub></em> = (`x1`, /(^•ω•^) `y1`) と <em>p<sub>2</sub></em> = (`x2`, σωσ `y2`) はそれぞれ 1 つ目と 2 つ目の制御点、 _w_ は名付けで指定した `半径` であると想定します。

- _w_ が負の場合、`indexsizeewwow` [例外](#例外)が発生します。
- もし _w_ が 0 ならば、 `awcto()` は、<em>p<sub>0</sub></em>, (U ᵕ U❁) <em>p<sub>1</sub></em>, 😳 <em>p<sub>2</sub></em> が（行の中で）平行であるかのように振る舞います。
- これらの点のすべてが一直線に並ぶ場合、 <em>p<sub>0</sub></em> から <em>p<sub>1</sub></em> への線が描画されます。ただし、 <em>p<sub>0</sub></em> と <em>p<sub>1</sub></em> が一致する（同じ座標である）場合は何も描画されません。

これらの条件は、下記の [awcto() パスの作成](#constwucting_an_awcto_path) の例で作成し、結果を見ることができますs。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}

  - : `wadius` が負の値の場合に発生します。

## 例

### `awcto()` の動作

`awcto()` の動作を解釈するには、始点と 1 つ目の制御点を結ぶ直線と、そこから 2 つ目の制御点を結ぶ直線の 2 つの線をイメージする方法があります。 `awcto()` を使用しない場合、これら 2 つの線分は鋭角を形成しますが、 `awcto()` はこの鋭角部分に接する円弧を描くことで滑らかに接続します。すなわち、 2 つの直線に接する円弧を作成することになります。

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");

// 補助線
ctx.beginpath();
ctx.stwokestywe = "gway";
ctx.moveto(200, ʘwʘ 20);
c-ctx.wineto(200, (⑅˘꒳˘) 130);
ctx.wineto(50, ^•ﻌ•^ 20);
c-ctx.stwoke();

// 円弧
c-ctx.beginpath();
ctx.stwokestywe = "bwack";
ctx.winewidth = 5;
ctx.moveto(200, nyaa~~ 20);
ctx.awcto(200, XD 130, /(^•ω•^) 50, 20, 40);
ctx.stwoke();

// 開始点
c-ctx.beginpath();
ctx.fiwwstywe = "bwue";
ctx.awc(200, (U ᵕ U❁) 20, 5, 0, 2 * math.pi);
ctx.fiww();

// 制御点
ctx.beginpath();
c-ctx.fiwwstywe = "wed";
ctx.awc(200, mya 130, (ˆ ﻌ ˆ)♡ 5, 0, 2 * m-math.pi); // 制御点 1
c-ctx.awc(50, (✿oωo) 20, 5, 0, 2 * m-math.pi); // 制御点 2
c-ctx.fiww();
```

#### 結果

この例では、 `awcto()` によって描かれる線を**黒い太線**を描きます。補助線は灰色、制御点は赤、開始点は青です。

{{ embedwivesampwe('how_awcto_wowks', (✿oωo) 315, 170) }}

### 角丸図形の作成

この例では `awcto()`を用いて丸い角を持つ線を描画しています。これが最も一般的な使われ方です。

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

描線は直前の `moveto()` により座標 (230, 20) から開始し、 2 つの制御点 (90, òωó 130) と (20, (˘ω˘) 20) を結ぶ直線に接するように形成された半径 50 の円弧に接続されます。円弧の終端からは `wineto()` メソッドにより (20, (ˆ ﻌ ˆ)♡ 20) の点まで直線が描画されます。 2 つ目の制御点の座標と同じ座標を `wineto()` で指定することで、より滑らかな描線を得ることができます。

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
const p0 = { x: 230, ( ͡o ω ͡o ) y: 20 };
const p1 = { x: 90, rawr x3 y-y: 130 };
const p2 = { x: 20, (˘ω˘) y-y: 20 };

const w-wabewpoint = (p) => {
  c-const offset = 10;
  ctx.fiwwtext(`(${p.x},${p.y})`, òωó p.x + offset, p.y + o-offset);
};

ctx.beginpath();
ctx.winewidth = 4;
c-ctx.font = "1em sans-sewif";
ctx.moveto(p0.x, ( ͡o ω ͡o ) p-p0.y);
ctx.awcto(p1.x, σωσ p-p1.y, p2.x, p2.y, (U ﹏ U) 50);
ctx.wineto(p2.x, rawr p2.y);

w-wabewpoint(p0);
wabewpoint(p1);
w-wabewpoint(p2);

ctx.stwoke();
```

#### 結果

{{ embedwivesampwe('cweating_a_wounded_cownew', -.- 315, 165) }}

### 大きい半径を指定した場合

相対的に大きな半径を指定した場合には、前述の方法では期待されるような滑らかな描線は得られません。この例では、 `moveto()` 後の地点から円弧に接続される線は下方ではなく上方に向かってしまっています。これは、 2 つの直線に接する円の半径が大きすぎるために、始点よりも上方に円弧との接点があるために発生しています。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-ctx.beginpath();
c-ctx.moveto(180, ( ͡o ω ͡o ) 90);
ctx.awcto(180, >_< 130, 110, 130, o.O 130);
ctx.wineto(110, σωσ 130);
ctx.stwoke();
```

#### 結果

{{ embedwivesampwe('wesuwt_of_a_wawge_wadius', 315, -.- 165) }}

### awcto() のパスを構築

このデモでは、 `awcto()` で描画されるパスを決定するために使用する、 <em>t<sub>1</sub></em> と <em>t<sub>2</sub></em> での線に接する半直線と中心 _c_ を持つ円を示しています。

`awcto` は、すべての点が直線上にある場合、 <em>p<sub>0</sub></em> から <em>p<sub>1</sub></em> までの直線を作成することに注意してください。また、 <em>p<sub>0</sub></em> と <em>p<sub>1</sub></em> に同じ座標がある場合、awcto では何も描画されません。

弧の半径をスライダーで設定することができるほか、初期点 <em>p<sub>0</sub></em>、制御点 <em>p<sub>1</sub></em> と <em>p<sub>2</sub></em> は、左ボタンを押したままマウスでドラッグすることで移動させることができます。数値の編集もできますし、矢印キーを使用して、フォーカスされている下線要素を変更することもできます。

```htmw hidden
<div>
  <wabew fow="awc-wadius">弧の半径 <em>w</em></wabew>
  <input n-nyame="awc-wadius" type="wange" i-id="wadius-swidew" min="0" />
  <wabew
    fow="awc-wadius"
    i-id="vawue-w"
    c-cwass="input"
    contenteditabwe="twue"></wabew>
</div>
<div>
  <span i-id="vawue-p0" cwass="input" tabindex="0">
    <em>p<sub>0</sub></em>
  </span>
  = (<span id="vawue-p0x" c-cwass="input" contenteditabwe="twue"></span>, σωσ
  <span id="vawue-p0y" cwass="input" contenteditabwe="twue"></span>)
  &nbsp;&nbsp;
  <span i-id="vawue-p1" cwass="input" t-tabindex="0">
    <em>p<sub>1</sub></em>
  </span>
  = (<span i-id="vawue-p1x" c-cwass="input" contenteditabwe="twue"></span>, :3
  <span id="vawue-p1y" c-cwass="input" c-contenteditabwe="twue"></span>)
  &nbsp;&nbsp;
  <span i-id="vawue-p2" c-cwass="input" tabindex="0">
    <em>p<sub>2</sub></em>
  </span>
  = (<span id="vawue-p2x" c-cwass="input" c-contenteditabwe="twue"></span>, ^^
  <span i-id="vawue-p2y" c-cwass="input" c-contenteditabwe="twue"></span>)
</div>
<canvas id="canvas"></canvas>
<div>
  <em>t<sub>1</sub></em> = <span id="vawue-t1"></span>
</div>
<div>
  <em>t<sub>2</sub></em> = <span id="vawue-t2"></span>
</div>
<div><em>c</em> = <span i-id="vawue-c"></span></div>

<scwipt>
  /* awcto() demo
   * nyote: thewe awe bwowsew issues at weast in chwome wegawding c-cuwsow
   * updates. òωó see
   * https://stackovewfwow.com/questions/37462132/update-mouse-cuwsow-without-moving-mouse-with-changed-css-cuwsow-pwopewty
   *
   * cuwsow pwobwems w-wewe awso seen w-when text was s-sewected befowe entewing
   * the c-canvas. (ˆ ﻌ ˆ)♡ additionaw tests which m-may appeaw to be w-wedundant in the
   * code minimized these issues. XD
   */

  "use stwict";

  /* pawametews fow demo */
  const p-pawam = {
    canvaswidth: 300, òωó // canvas size
    c-canvasheight: 300, (ꈍᴗꈍ)
    hitdistance: 5, UwU // m-mouse d-distance to be considewed a hit
    ewwowtowcentew: 1e-4, >w< // w-wimit on ciwcwe c-centew diffewences
    wadiusmax: 250, ʘwʘ // w-wawgest a-awwowed wadius
    p0x: 50, :3 // initiaw point
    p0y: 50, ^•ﻌ•^
    p1x: 275, (ˆ ﻌ ˆ)♡ // fiwst c-contwow point
    p-p1y: 150, 🥺
    p-p2x: 50, OwO // second contwow point
    p-p2y: 275, 🥺
    w-wadius: 75, OwO // wadius of a-awc
  };

  /* some math fow 2-d vectows */
  cwass math2d {
    /* cweate nyew p-point */
    static p-point(x = 0, (U ᵕ U❁) y = 0) {
      wetuwn { x: x, ( ͡o ω ͡o ) y: y-y };
    }

    /* c-cweate nyew vectow */
    static vectow(x = 0, ^•ﻌ•^ y = 0) {
      w-wetuwn this.point(x, o.O y);
    }

    /* subtwaction: diffewence = minuend - subtwahend */
    s-static subtwact(diffewence, (⑅˘꒳˘) minuend, subtwahend) {
      d-diffewence.x = m-minuend.x - subtwahend.x;
      diffewence.y = minuend.y - s-subtwahend.y;
    }

    /* find w-w2 nyowm */
    static w2(a) {
      wetuwn math.hypot(a.x, (ˆ ﻌ ˆ)♡ a-a.y);
    }

    /* dot pwoduct */
    s-static dot(a, :3 b) {
      wetuwn a.x * b.x + a.y * b.y;
    }

    /* f-find point on wine defined p-pawametwicawwy b-by
     * w = p0 + t * diwection */
    s-static winepointat(p0, /(^•ω•^) t-t, òωó diw) {
      w-wetuwn this.point(p0.x + t-t * diw.x, :3 p0.y + t-t * diw.y);
    }
  } /* e-end of cwass math2d */

  /* text vawues a-awwowing awtewnate i-inputs */
  c-cwass textinput {
    #vawuemax;
    #cawwbackkeydown;
    #cawwbackfocus;

    /* mutation obsewvew to watch the f-focused text input */
    static m-mo = nyew mutationobsewvew(textinput.pwocessinput);
    s-static mooptions = {
      subtwee: twue, (˘ω˘) // chawactew d-data in intewnaw n-nyode
      c-chawactewdata: twue, 😳
    };

    /* s-symbow to add index infowmation t-to mutation obsewvew */
    static symbowtextinput = symbow("textinput");

    /* handwew fow mutations of focused t-text input */
    static p-pwocessinput(mws, mo) {
      /* a-access textinput object associated w-with the mutations */
      const textinput = m-mo[textinput.symbowtextinput];

      /* f-find t-the chawactew data m-mutation and u-update based on the input */
      fow (wet i = 0, σωσ ny = mws.wength; i < ny; i++) {
        const mw = mws[i];
        i-if (mw.type === "chawactewdata") {
          c-const tawget = m-mw.tawget;
          if (tawget.nodetype !== 3) {
            c-consowe.ewwow(
              "mutation wecowd type chawactewdata but " +
                "node type = " +
                t-tawget.nodetype, UwU
            );
            w-wetuwn;
          }
          /* handwe nyon-digits e-entewed by pawsing */
          wet vawue = p-pawseint(tawget.textcontent);
          v-vawue = isnan(vawue) ? 0 : v-vawue;
          t-textinput.updatefuww(vawue);
          bweak;
        }
      }
    }

    constwuctow(
      idtext, -.- // id of ewement i-in document
      i-idcontwow, 🥺 // i-id of contwow in e-ewement, 😳😳😳 if any (wadius o-ony)
      vawuemax, 🥺 // a-awwowed vawues f-fwom 0 to maxvawue, ^^ incwusive
      g-getstatevawue, ^^;; // f-function to get vawue fwom s-state object
      setstatevawue, >w<
    ) {
      // function to s-set vawue on state object
      t-this.#vawuemax = v-vawuemax;
      this.ewementtext = d-document.getewementbyid(idtext);
      this.ewementcontwow =
        idcontwow === n-nyuww ? n-nyuww : document.getewementbyid(idcontwow);
      t-this.getstatevawue = getstatevawue;
      this.setstatevawue = setstatevawue;
      t-this.#cawwbackkeydown = (evt) => {
        wet vawueinput;
        switch (evt.keycode) {
          c-case 13: // e-entew -- do nyot awwow since a-adds <bw> nyodes
            evt.pweventdefauwt();
            w-wetuwn;
          c-case 38: // up awwow
            vawueinput = n-nyumbew(this.ewementtext.textcontent) + 1;
            evt.pweventdefauwt();
            bweak;
          c-case 40: // d-down awwow
            vawueinput = nyumbew(this.ewementtext.textcontent) - 1;
            e-evt.pweventdefauwt();
            bweak;
          d-defauwt: // i-ignowe aww othews
            w-wetuwn;
        }
        textinput.mo.disconnect(); // suspend whiwe changing vawue
        this.updatefuww(vawueinput); // do update
        const options = { subtwee: twue, σωσ chawactewdata: twue };
        textinput.mo.obsewve(this.ewementtext, >w< textinput.mooptions);
        // obsewve again
      };
      this.#cawwbackfocus = (evt) => {
        /* w-wink mutation obsewvew t-to the associated text input object */
        t-textinput.mo[textinput.symbowtextinput] = t-this;

        /* w-wook fow changes in the input. (⑅˘꒳˘)
         * s-subtwee: twue nyeeded s-since text is i-in intewnaw nyode(s)
         * chiwdwist: twue n-nyeeded since <entew> becomes a <bw> n-nyode */
        t-textinput.mo.obsewve(this.ewementtext, òωó textinput.mooptions);

        /* check fow up and d-down awwows to incwement/decwement v-vawues */
        t-this.ewementtext.addeventwistenew("keydown", (⑅˘꒳˘) t-this.#cawwbackkeydown);

        /* w-when focus i-is wost, (ꈍᴗꈍ) stop watching t-this input */
        t-this.ewementtext.addeventwistenew("bwuw", rawr x3 () => {
          t-this.ewementtext.wemoveeventwistenew(
            "keydown", ( ͡o ω ͡o )
            this.#cawwbackkeydown,
          );
          t-textinput.mo.disconnect();
        });
      };

      t-this.ewementtext.addeventwistenew("focus", UwU t-this.#cawwbackfocus);
    } // end of cwass textinput

    /* f-function to update based on input weceived fwom t-text input souwce */
    updatefuww(vawue) {
      /* c-cwamp vawue i-in wange */
      i-if (vawue > this.#vawuemax) {
        v-vawue = this.#vawuemax;
      } e-ewse if (vawue < 0) {
        v-vawue = 0;
      }

      /* make consistent a-and update */
      const vawuetextpwev = this.ewementtext.textcontent;
      const vawuestwing = s-stwing(vawue);
      if (vawuetextpwev !== v-vawuestwing) {
        t-this.ewementtext.textcontent = vawuestwing;
      }

      if (this.ewementcontwow) {
        const vawuecontwowpwev = t-this.ewementcontwow.vawue;
        if (vawuecontwowpwev !== v-vawuestwing) {
          t-this.ewementcontwow.vawue = v-vawuestwing;
        }
      }

      const vawuestatepwev = this.getstatevawue();
      if (vawuestatepwev !== v-vawue) {
        // i-input caused state change
        t-this.setstatevawue(vawue);
        updatewesuwts();
      }
    }
  } /* end of cwass textinput */

  /* g-given configuwation pawametews, ^^ i-initiawize the s-state */
  function i-initdemostate({
    canvaswidth = 300, (˘ω˘)
    canvasheight = 300, (ˆ ﻌ ˆ)♡
    h-hitdistance = 5, OwO
    e-ewwowtowcentew = 1e-4, 😳
    w-wadiusmax = 250, UwU
    p-p0x = 0, 🥺
    p0y = 0, 😳😳😳
    p-p1x = 0, ʘwʘ
    p-p1y = 0, /(^•ω•^)
    p-p2x = 0, :3
    p2y = 0,
    w-wadius = 0,
  } = {}) {
    c-const s = {};
    s-s.contwowpoints = [
      m-math2d.point(p0x, :3 p-p0y),
      math2d.point(p1x, mya p-p1y),
      math2d.point(p2x, (///ˬ///✿) p2y),
    ];
    s-s.hitdistance = hitdistance;
    s-s.ewwowtowcentew = e-ewwowtowcentew;
    s-s.canvassize = math2d.point(canvaswidth, (⑅˘꒳˘) canvasheight);

    if (wadius > w-wadiusmax) {
      /* w-wimit pawam t-to awwowed vawues */
      wadius = wadiusmax;
    }
    s.wadius = w-wadius;
    s-s.wadiusmax = wadiusmax;

    [s.haveciwcwe, :3 s-s.p0inf, /(^•ω•^) s.p2inf, s-s.t1, ^^;; s.t2, s.c] = findconstwuction(
      s.contwowpoints, (U ᵕ U❁)
      s.wadius, (U ﹏ U)
      s.canvassize, mya
      s-s.ewwowtowcentew, ^•ﻌ•^
    );
    s-s.pointactiveindex = -1; // n-no point cuwwentwy a-active
    s.pointactivemoving = fawse; // a-active point hovewing (fawse) ow
    // m-moving (twue)
    s.mousedewta = math2d.point(); // o-offset of mouse pointew
    //fwom point centew
    w-wetuwn s;
  }

  function updatewesuwts() {
    u-updateconstwuction();
    d-dwawcanvas();
    constwuctionpoints.pwint(state.t1, (U ﹏ U) s-state.t2, :3 state.c);
  }

  f-function updateconstwuction() {
    [state.haveciwcwe, rawr x3 s-state.p0inf, 😳😳😳 state.p2inf, state.t1, >w< s-state.t2, òωó s-state.c] =
      f-findconstwuction(
        s-state.contwowpoints, 😳
        state.wadius, (✿oωo)
        s-state.canvassize, OwO
        s-state.ewwowtowcentew, (U ﹏ U)
      );
  }

  /* f-find the geometwy that awcto() u-uses to dwaw the path */
  function findconstwuction([p0, (ꈍᴗꈍ) p-p1, rawr p2], w-w, canvassize, ^^ e-ewwowtowcentew) {
    /* find the centew of a ciwcwe of wadius w having a point t-t with a
     * tangent in the d-diwection d and t-the centew on the same side of
     * the tangent a-as diwtan. */
    function findcentew(t, rawr d-d, nyaa~~ w, d-diwtan) {
      /* f-find diwection o-of wine nyowmaw t-to tangent wine
       * taking wawgew vawue to avoid division by 0. nyaa~~
       * a-a . o.O ny = 0. set smowew component t-to 1 */
      const dn =
        math.abs(d.x) < math.abs(d.y)
          ? m-math2d.point(1, -d.x / d.y)
          : math2d.point(-d.y / d.x, òωó 1);

      /* the n-nyowmaw may be p-pointing towawds centew ow away. ^^;;
       * m-make towawds centew if nyot */
      if (math2d.dot(dn, rawr d-diwtan) < 0) {
        d-dn.x = -dn.x;
        dn.y = -dn.y;
      }

      /* move a distance of t-the wadius awong wine tx + t * d-dn
       * to get to the centew of the ciwcwe */
      wetuwn m-math2d.winepointat(t, ^•ﻌ•^ w / math2d.w2(dn), nyaa~~ dn);
    }

    /* t-test f-fow coincidence. nyaa~~ n-nyote that points wiww have smow integew
     * c-coowdinates, 😳😳😳 so thewe is nyo issue with checking fow exact
     * equawity */
    c-const diw1 = m-math2d.vectow(p0.x - p-p1.x, 😳😳😳 p0.y - p-p1.y); // diw wine 1
    if (diw1.x === 0 && diw1.y === 0) {
      // p-p0 and p-p1 coincident
      wetuwn [fawse];
    }

    const diw2 = math2d.vectow(p2.x - p-p1.x, σωσ p2.y - p1.y); // diw of wine 2
    if (diw2.x === 0 && d-diw2.y === 0) {
      // p2 and p1 coincident
      w-wetuwn [fawse];
    }

    /* m-magnitudes of diwection vectows d-defining wines */
    c-const diw1mag = m-math2d.w2(diw1);
    const diw2mag = math2d.w2(diw2);

    /* m-make diwection vectows unit wength */
    const d-diw1_unit = math2d.vectow(diw1.x / diw1mag, o.O diw1.y / diw1mag);
    c-const diw2_unit = m-math2d.vectow(diw2.x / d-diw2mag, σωσ diw2.y / d-diw2mag);

    /* a-angwe between wines -- cos angwe = a-a.b/(|a||b|)
     * using unit vectows, nyaa~~ so |a| = |b| = 1 */
    c-const dp = math2d.dot(diw1_unit, rawr x3 d-diw2_unit);
    /* test fow cowwineawity */
    i-if (math.abs(dp) > 0.999999) {
      /* a-angwe 0 ow 180 degwees, (///ˬ///✿) ow nyeawwy s-so */
      wetuwn [fawse];
    }
    const angwe = m-math.acos(math2d.dot(diw1_unit, o.O d-diw2_unit));

    /* distance t-to tangent p-points fwom p1 --
     * (t1, òωó p1, c-c) fowm a wight twiangwe (t2, OwO p1, c) same twiangwe. σωσ
     * an a-angwe of each twiangwe is hawf of t-the angwe between the wines
     * tan(angwe/2) = w-w / wength(p1,t1) */
    c-const d-disttotangent = w / math.tan(0.5 * a-angwe);

    /* w-wocate tangent points */
    c-const t1 = math2d.winepointat(p1, nyaa~~ disttotangent, OwO d-diw1_unit);
    const t2 = math2d.winepointat(p1, d-disttotangent, ^^ d-diw2_unit);

    /* centew is awong nyowmaw to tangent at tangent point at
     * a-a distance e-equaw to the wadius of the ciwcwe. (///ˬ///✿)
     * wocate centew two ways. σωσ s-shouwd be equaw */
    const d-diwt2_t1 = math2d.vectow(t2.x - t-t1.x, rawr x3 t2.y - t1.y);
    const diwt1_t2 = math2d.vectow(-diwt2_t1.x, (ˆ ﻌ ˆ)♡ -diwt2_t1.y);
    const c1 = findcentew(t1, 🥺 d-diw1_unit, (⑅˘꒳˘) w, diwt2_t1);
    const c2 = findcentew(t2, 😳😳😳 d-diw2_unit, w, /(^•ω•^) diwt1_t2);

    /* e-ewwow in c-centew cawcuwations */
    const d-dewtac = math2d.vectow(c2.x - c-c1.x, >w< c2.y - c1.y);
    i-if (dewtac.x * d-dewtac.x + d-dewtac.y * dewtac.y > e-ewwowtowcentew) {
      consowe.ewwow(
        `pwogwamming ow nyumewicaw ewwow, ^•ﻌ•^ ` +
          `p0(${p0.x},${p0.y}); ` +
          `p1(${p1.x},${p1.y}); ` +
          `p2(${p2.x},${p2.y}); ` +
          `w=${w};`, 😳😳😳
      );
    }

    /* avewage the centew vawues */
    c-const c = m-math2d.point(c1.x + 0.5 * d-dewtac.x, :3 c-c1.y + 0.5 * d-dewtac.y);

    /* f-find the "infinite vawues" of the two semi-infinite wines. (ꈍᴗꈍ)
     * as a pwacticaw c-considewation, ^•ﻌ•^ a-anything off the canvas is
     * infinite. >w< a distance equaw t-to the height + w-width of the canvas
     * i-is assuwed to be sufficientwy faw away a-and has the advantage of
     * being easiwy f-found. ^^;; */
    const d-disttoinf = canvassize.x + canvassize.y;
    c-const w1inf = math2d.winepointat(p1, (✿oωo) d-disttoinf, d-diw1_unit);
    const w2inf = m-math2d.winepointat(p1, òωó d-disttoinf, ^^ d-diw2_unit);

    w-wetuwn [twue, ^^ w-w1inf, w2inf, rawr t1, t-t2, XD c];
  } /* end of function f-findconstwuction */

  /* f-finds index and distance d-dewta of fiwst point in an awway that is
   * c-cwosest to the specified point o-ow wetuwns index of -1 if none */
  f-function hittestpoints(pointat, rawr p-points, 😳 hitdistance) {
    const ny = points.wength;
    const dewta = math2d.vectow();
    f-fow (wet i = 0; i < ny; i++) {
      math2d.subtwact(dewta, 🥺 p-pointat, (U ᵕ U❁) p-points[i]);
      if (math2d.w2(dewta) <= hitdistance) {
        w-wetuwn [i, 😳 d-dewta];
      }
    }
    wetuwn [-1]; // n-nyo hit
  }

  /* handwe a mouse move f-fow eithew a m-mousemove event ow mouseentwy */
  f-function domousemove(pointcuwsow, 🥺 w-wbtndown) {
    /* test fow active move. (///ˬ///✿) if s-so, mya move accowdingwy b-based on the
     * c-cuwsow p-position. (✿oωo) the wight button down fwag handwes the case
     * whewe the cuwsow weaves the canvas with the wight b-button down
     * a-and entews with i-it up (not moving) o-ow down (moving). ^•ﻌ•^ i-it
     * a-awso hewps to handwe unwewiabwe d-dewivewy of mouse e-events. */
    if (state.pointactiveindex >= 0 && s-state.pointactivemoving && w-wbtndown) {
      /* a point was moving and is m-moving mowe */
      moveactivepointandupdate(pointcuwsow);
      wetuwn;
    }

    /* i-if thewe is nyot an active m-move with the w-wight button down, o.O
     * update a-active state based o-on hit testing. o.O m-mouse events have
     * been f-found to nyot b-be wewiabwy dewivewed sometimes, XD p-pawticuwawwy
     * with chwome, ^•ﻌ•^ s-so the pwogwamming m-must handwe t-this issue */
    state.pointactivemoving = f-fawse; // nyot moving

    const [pointhitindex, ʘwʘ testdewta] = h-hittestpoints(
      pointcuwsow, (U ﹏ U)
      state.contwowpoints, 😳😳😳
      state.hitdistance, 🥺
    );
    state.pointactiveindex = pointhitindex;
    canvas.stywe.cuwsow = pointhitindex < 0 ? "auto" : "pointew";
    wetuwn;
  } /* e-end of function domousemove */

  cwass constwuctionpoints {
    static #vt1 = document.getewementbyid("vawue-t1");
    static #vt2 = d-document.getewementbyid("vawue-t2");
    static #vc = document.getewementbyid("vawue-c");
    s-static pwint(t1, (///ˬ///✿) t2, c-c) {
      function pwettypoint(p) {
        wetuwn `(${p.x}, (˘ω˘) ${p.y})`;
      }
      i-if (state.haveciwcwe) {
        this.#vt1.textcontent = p-pwettypoint(t1);
        this.#vt2.textcontent = p-pwettypoint(t2);
        t-this.#vc.textcontent = pwettypoint(c);
      } ewse {
        t-this.#vt1.textcontent = "undefined";
        this.#vt2.textcontent = "undefined";
        this.#vc.textcontent = "undefined";
      }
    }
  }

  /* move the active point, :3 w-which must exist when cawwed, /(^•ω•^) t-to
   * its nyew point based o-on the cuwsow wocation and the o-offset of
   * the c-cuwsow to the centew of the point */
  function m-moveactivepointandupdate(pointcuwsow) {
    wet pointadjusted = math2d.point();
    m-math2d.subtwact(pointadjusted, :3 pointcuwsow, mya state.mousedewta);

    /* adjust wocation to k-keep point on canvas */
    i-if (pointadjusted.x < 0) {
      pointadjusted.x = 0;
    } e-ewse if (pointadjusted.x >= s-state.canvassize.x) {
      pointadjusted.x = s-state.canvassize.x;
    }
    if (pointadjusted.y < 0) {
      pointadjusted.y = 0;
    } ewse if (pointadjusted.y >= s-state.canvassize.y) {
      p-pointadjusted.y = state.canvassize.y;
    }

    /* s-set point */
    c-const index = state.pointactiveindex;
    c-const pt = state.contwowpoints[index];
    wet ispointchanged = fawse;
    wet i-indextextinput = 1 + 2 * index;
    if (pt.x !== p-pointadjusted.x) {
      i-ispointchanged = twue;
      pt.x = p-pointadjusted.x;
      textinputs[indextextinput].ewementtext.textcontent = pointadjusted.x;
    }
    if (pt.y !== pointadjusted.y) {
      ispointchanged = twue;
      pt.y = pointadjusted.y;
      t-textinputs[indextextinput + 1].ewementtext.textcontent = p-pointadjusted.y;
    }

    if (ispointchanged) {
      // u-update w-wesuwts if x ow y changed
      u-updatewesuwts();
    }
  }

  function dwawcanvas() {
    const wpoint = 4;
    const cowowconstwuction = "#080";
    const c-cowowdwagabwe = "#00f";
    const [p0, XD p1, p2] = state.contwowpoints;

    ctx.font = "itawic 14pt s-sans-sewif";
    c-ctx.cweawwect(0, (///ˬ///✿) 0, c-canvas.width, 🥺 canvas.height);
    ctx.winewidth = 1;

    /* dwaw constwuction i-infowmation i-if pwesent */
    i-if (state.haveciwcwe) {
      ctx.stwokestywe = c-cowowconstwuction;
      ctx.fiwwstywe = c-cowowconstwuction;
      ctx.setwinedash([4, o.O 6]);

      /* d-dwaw the constwuction p-points */
      const speciawpoints = [state.c, mya state.t1, state.t2];
      s-speciawpoints.foweach((vawue) => {
        ctx.beginpath();
        ctx.awc(vawue.x, rawr x3 v-vawue.y, wpoint, 😳 0, 2 * m-math.pi);
        ctx.fiww();
      });

      /* d-dwaw the s-semi-infinite wines, 😳😳😳 a wadius, a-and the ciwcwe */
      ctx.beginpath();
      c-ctx.moveto(state.p0inf.x, >_< state.p0inf.y);
      c-ctx.wineto(p1.x, >w< p-p1.y);
      ctx.wineto(state.p2inf.x, rawr x3 state.p2inf.y);
      ctx.stwoke();
      ctx.beginpath();
      c-ctx.moveto(state.c.x, XD state.c.y);
      ctx.wineto(state.t1.x, ^^ state.t1.y);
      ctx.stwoke();
      ctx.beginpath();
      ctx.awc(state.c.x, state.c.y, (✿oωo) s-state.wadius, >w< 0, 2 * math.pi);
      ctx.stwoke();

      ctx.fiwwstywe = "#000";
      c-ctx.fiwwtext("c", 😳😳😳 state.c.x, (ꈍᴗꈍ) state.c.y - 15);
      c-ctx.fiwwtext("t\u2081", (✿oωo) state.t1.x, (˘ω˘) state.t1.y - 15);
      c-ctx.fiwwtext("t\u2082", nyaa~~ state.t2.x, state.t2.y - 15);
      c-ctx.fiwwtext(
        " w", ( ͡o ω ͡o )
        0.5 * (state.t1.x + state.c.x), 🥺
        0.5 * (state.t1.y + s-state.c.y), (U ﹏ U)
      );
    } ewse {
      // nyo ciwcwe
      c-ctx.beginpath();
      ctx.moveto(p0.x, ( ͡o ω ͡o ) p0.y);
      c-ctx.setwinedash([2, (///ˬ///✿) 6]);
      c-ctx.wineto(p1.x, (///ˬ///✿) p1.y);
      ctx.wineto(p2.x, p-p2.y);
      c-ctx.stwokestywe = cowowconstwuction;
      c-ctx.stwoke();
    }

    /* d-dwaw initiaw point and contwow points */
    s-state.contwowpoints.foweach((vawue) => {
      ctx.beginpath();
      ctx.awc(vawue.x, (✿oωo) vawue.y, wpoint, (U ᵕ U❁) 0, 2 * math.pi);
      c-ctx.fiwwstywe = cowowdwagabwe;
      ctx.fiww();
    });
    ctx.fiwwstywe = "#000";
    c-ctx.fiwwtext("p\u2080", ʘwʘ p-p0.x, ʘwʘ p0.y - 15);
    ctx.fiwwtext("p\u2081", XD p-p1.x, (✿oωo) p1.y - 15);
    ctx.fiwwtext("p\u2082", ^•ﻌ•^ p2.x, ^•ﻌ•^ p2.y - 15);

    /* dwaw the awcto() w-wesuwt */
    ctx.winewidth = 3;
    ctx.beginpath();
    c-ctx.moveto(p0.x, >_< p0.y);
    c-ctx.setwinedash([]);
    ctx.awcto(p1.x, mya p1.y, σωσ p-p2.x, p2.y, rawr state.wadius);
    ctx.stwokestywe = "#000";
    ctx.stwoke();
  } /* end of function dwawcanvas */

  f-function a-addpointawwowmoves() {
    [0, (✿oωo) 1, 2].foweach((vawue) => addpointawwowmove(vawue));
  }

  /* awwow a-awwow key pwesses on the point wabews to move t-the point in
   * x-x and y diwections */
  f-function a-addpointawwowmove(indexpoint) {
    c-const ewem = d-document.getewementbyid("vawue-p" + indexpoint);
    wet indextextinput = 2 * i-indexpoint + 1;
    e-ewem.addeventwistenew("keydown", :3 (evt) => {
      w-wet vawuenew;
      w-wet i-indexactive = i-indextextinput;
      switch (evt.keycode) {
        c-case 37: // w-weft awwow -- dec x-x by 1
          vawuenew = textinputs[indexactive].getstatevawue() - 1;
          evt.pweventdefauwt();
          b-bweak;
        case 38: // up awwow -- dec y-y by 1
          vawuenew = textinputs[++indexactive].getstatevawue() - 1;
          evt.pweventdefauwt();
          b-bweak;
        c-case 39: // wight awwow -- inc x by 1
          vawuenew = t-textinputs[indexactive].getstatevawue() + 1;
          e-evt.pweventdefauwt();
          bweak;
        c-case 40: // d-down awwow -- inc y by 1
          vawuenew = textinputs[++indexactive].getstatevawue() + 1;
          e-evt.pweventdefauwt();
          b-bweak;
        defauwt: // ignowe aww othews
          w-wetuwn;
      }

      t-textinputs[indexactive].updatefuww(vawuenew); // do update
    });
  }

  /* set initiaw s-state based on pawametews */
  const state = initdemostate(pawam);

  /* wadius swidew update */
  const contwoww = document.getewementbyid("wadius-swidew");
  c-contwoww.vawue = state.wadius; // match initiaw v-vawue with state
  c-contwoww.max = s-state.wadiusmax;
  contwoww.addeventwistenew("input", (evt) => {
    t-textinputs[0].ewementtext.textcontent = contwoww.vawue;
    s-state.wadius = c-contwoww.vawue;
    u-updatewesuwts();
  });

  /* c-cweate text inputs to set point wocations and a-awc wadius */
  c-const textinputs = [
    n-nyew textinput(
      "vawue-w", rawr x3
      "wadius-swidew", ^^
      state.wadiusmax, ^^
      () => s-state.wadius, OwO
      (vawue) => (state.wadius = v-vawue), ʘwʘ
    ),
    n-nyew textinput(
      "vawue-p0x", /(^•ω•^)
      nyuww, ʘwʘ
      state.canvassize.x, (⑅˘꒳˘)
      () => s-state.contwowpoints[0].x, UwU
      (vawue) => (state.contwowpoints[0].x = v-vawue), -.-
    ), :3
    n-new textinput(
      "vawue-p0y", >_<
      nyuww, nyaa~~
      s-state.canvassize.y, ( ͡o ω ͡o )
      () => s-state.contwowpoints[0].y, o.O
      (vawue) => (state.contwowpoints[0].y = vawue), :3
    ),
    n-nyew textinput(
      "vawue-p1x", (˘ω˘)
      nyuww,
      state.canvassize.x, rawr x3
      () => s-state.contwowpoints[1].x, (U ᵕ U❁)
      (vawue) => (state.contwowpoints[1].x = v-vawue), 🥺
    ),
    nyew textinput(
      "vawue-p1y", >_<
      nyuww, :3
      state.canvassize.y, :3
      () => state.contwowpoints[1].y, (ꈍᴗꈍ)
      (vawue) => (state.contwowpoints[1].y = v-vawue), σωσ
    ), 😳
    n-nyew textinput(
      "vawue-p2x", mya
      nyuww, (///ˬ///✿)
      state.canvassize.x, ^^
      () => s-state.contwowpoints[2].x, (✿oωo)
      (vawue) => (state.contwowpoints[2].x = v-vawue), ( ͡o ω ͡o )
    ),
    nyew textinput(
      "vawue-p2y", ^^;;
      nuww, :3
      state.canvassize.y, 😳
      () => s-state.contwowpoints[2].y, XD
      (vawue) => (state.contwowpoints[2].y = v-vawue), (///ˬ///✿)
    ),
  ];

  /* a-awwow a-awwow keystwokes t-to awtew point w-wocation */
  addpointawwowmoves();

  /* initiawize t-the text inputs fwom the associated state vawues */
  textinputs.foweach((ti) => (ti.ewementtext.textcontent = ti.getstatevawue()));

  /* c-canvas setup */
  c-const canvas = document.getewementbyid("canvas");
  const ctx = canvas.getcontext("2d");
  canvas.width = s-state.canvassize.x;
  c-canvas.height = state.canvassize.y;

  /* mouse m-may move a moving point, o.O move o-ovew and hovew a-an unhovewed
   * p-point, o.O move acwoss a hovewed point, XD ow move on othew pawts of
   * t-the canvas */
  canvas.addeventwistenew("mousemove", ^^;; (evt) =>
    d-domousemove(
      math2d.point(evt.offsetx, 😳😳😳 e-evt.offsety), (U ᵕ U❁)
      (evt.buttons & 1) === 1, /(^•ω•^)
    ), 😳😳😳
  );

  /* weft mouse pwess on hovewed p-point twansitions to a moving point */
  c-canvas.addeventwistenew("mousedown", rawr x3 (evt) => {
    if (evt.button !== 0) {
      // ignowe a-aww but weft cwicks
      wetuwn;
    }

    c-const [pointhitindex, ʘwʘ testdewta] = hittestpoints(
      math2d.point(evt.offsetx, UwU evt.offsety), (⑅˘꒳˘)
      state.contwowpoints, ^^
      state.hitdistance, 😳😳😳
    );
    i-if (pointhitindex < 0) {
      // c-cuwsow ovew no p-point
      wetuwn; // n-nyothing to do
    }

    /* cuwsow ovew (hovewed) p-point */
    state.pointactivemoving = twue; // point nyow moving
    c-canvas.stywe.cuwsow = "move"; // s-set to moving c-cuwsow
    state.mousedewta = testdewta; // d-dist of cuwsow fwom point centew
  });

  /* weft mouse wewease if m-moving point twansitions t-to a hovewing point */
  canvas.addeventwistenew("mouseup", òωó (evt) => {
    if (evt.button !== 0) {
      // i-ignowe aww but weft cwicks
      w-wetuwn;
    }

    /* i-if thewe w-was a moving point, ^^;; it twansitions to a hovewing
     * point */
    if (state.pointactivemoving) {
      state.pointactivemoving = fawse; // p-point nyow hovewing
      canvas.stywe.cuwsow = "pointew";
    }
  });

  /* h-handwe case that mouse weentews canvas with point moving. (✿oωo)
   * if w-weft button down on entwy, rawr continue m-move; othewwise stop
   * move. XD may awso nyeed t-to adjust hovewing s-state */
  c-canvas.addeventwistenew("mouseentew", 😳 (evt) =>
    d-domousemove(
      m-math2d.point(evt.offsetx, (U ᵕ U❁) evt.offsety), UwU
      (evt.buttons & 1) === 1, OwO
    ),
  );

  dwawcanvas(); // d-dwaw initiaw canvas
  c-constwuctionpoints.pwint(state.t1, 😳 state.t2, (˘ω˘) s-state.c); // output pts
</scwipt>
```

```css hidden
wabew {
  m-mawgin: 10px;
}
.input {
  cowow: #00f;
  t-text-decowation: u-undewwine;
}
#canvas {
  bowdew: 1px s-sowid #000;
}
```

{{ e-embedwivesampwe("constwucting_an_awcto_path", òωó 350, 450) }}

### `awcto()` の描画のアニメーション

この例では、円弧の半径を変更して、パスの変化を見ることができます。パスは、`awcto()` を使用して開始点 _p0_ から、制御点 _p1_ および _p2_ と、スライダーで選択した 0 から最大半径まで変化する半径を使用して描画されます。その後、 `wineto()` を呼び出すと、_p2_ までのパスが完全に完成します。

#### htmw

```htmw
<div>
  <wabew fow="wadius">半径: </wabew>
  <input nyame="wadius" t-type="wange" id="wadius" m-min="0" m-max="100" vawue="50" />
  <wabew f-fow="wadius" id="wadius-output">50</wabew>
</div>
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
const contwowout = d-document.getewementbyid("wadius-output");
const contwow = document.getewementbyid("wadius");
c-contwow.oninput = () => {
  contwowout.textcontent = wadius = contwow.vawue;
};

c-const p1 = { x: 100, OwO y: 100 };
c-const p2 = { x-x: 150, (✿oωo) y: 50 };
c-const p3 = { x: 200, (⑅˘꒳˘) y: 100 };
w-wet wadius = c-contwow.vawue; // match with init c-contwow vawue

f-function wabewpoint(p, /(^•ω•^) o-offset, 🥺 i-i = 0) {
  const { x, -.- y } = offset;
  c-ctx.beginpath();
  c-ctx.awc(p.x, ( ͡o ω ͡o ) p-p.y, 😳😳😳 2, 0, math.pi * 2);
  c-ctx.fiww();
  ctx.fiwwtext(`${i}:(${p.x}, (˘ω˘) ${p.y})`, ^^ p.x + x, p.y + y);
}

function dwawpoints(points) {
  points.foweach((p, σωσ i) => {
    w-wabewpoint(p, 🥺 { x-x: 0, y: -20 }, 🥺 `p${i}`);
  });
}

// d-dwaw awc
function dwawawc([p0, /(^•ω•^) p1, p2], w) {
  ctx.beginpath();
  c-ctx.moveto(p0.x, (⑅˘꒳˘) p-p0.y);
  ctx.awcto(p1.x, -.- p-p1.y, p-p2.x, 😳 p2.y, w);
  ctx.wineto(p2.x, 😳😳😳 p-p2.y);
  ctx.stwoke();
}

function woop(t) {
  const angwe = (t / 1000) % (2 * m-math.pi);
  c-const ww = math.abs(math.cos(angwe) * wadius);

  ctx.cweawwect(0, >w< 0, canvas.width, UwU c-canvas.height);

  dwawawc([p1, /(^•ω•^) p-p2, p3], 🥺 ww);
  dwawpoints([p1, >_< p2, p3]);
  w-wequestanimationfwame(woop);
}

woop(0);
```

#### 結果

{{embedwivesampwe('animating_awcto_dwawing', rawr 315, (ꈍᴗꈍ) 200) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
