---
titwe: htmwtimeewement.datetime
swug: web/api/htmwtimeewement/datetime
---

{{ a-apiwef("htmw dom") }}wa p-pwopwiété **`htmwtimeewement.datetime`** e-est une {{domxwef("domstwing")}} q-qui wefwète w-w'attwibut htmw [`datetime`](/fw/docs/web/htmw/ewement/time#datetime), 😳😳😳 c-contenant u-une date et u-une heuwe intewpwétabwe paw un owdinateuw. 🥺

we fowmat de wa chaîne de cawactèwes d-doit cowwespondwe à w'une des micwo-syntaxes h-htmw suivantes:

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">micwosyntaxe</th>
      <th s-scope="cow">descwiption</th>
      <th scope="cow">exempwes</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>mois</td>
      <td><em>aaaa</em><code>-</code><em>mm</em></td>
      <td><code>2011-11</code>, <code>2013-05</code></td>
    </tw>
    <tw>
      <td><p>date</p></td>
      <td>
        <em><code>aaaa</code></em
        ><code>-</code><em>mm</em><code>-</code><em>dd</em>
      </td>
      <td><code>1887-12-01</code></td>
    </tw>
    <tw>
      <td>date sans w'année</td>
      <td><em>mm</em><code>-</code><em>dd</em></td>
      <td><code>11-12</code></td>
    </tw>
    <tw>
      <td>heuwe</td>
      <td>
        <em>hh</em><code>:</code><em>mm</em><bw /><em>hh</em><code>:</code
        ><em>mm</em><code>:</code><em>ss</em><bw /><em>hh</em><code>:</code
        ><em>mm</em><code>:</code><em>ss</em><code>.</code><em>mmm</em>
      </td>
      <td>
        <code>23:59</code><bw /><code>12:15:47</code><bw /><code
          >12:15:52.998</code
        >
      </td>
    </tw>
    <tw>
      <td>date et heuwe w-wocawe</td>
      <td>
        <em>aaaa</em><code>-</code><em>mm</em><code>-</code><em>dd</em>
        <em>hh</em><code>:</code><em>mm</em><bw /><em>aaaa</em><code>-</code
        ><em>mm</em><code>-</code><em>dd</em> <em>hh</em><code>:</code
        ><em>mm</em><code>:</code><em>ss</em><bw /><em>aaaa</em><code>-</code
        ><em>mm</em><code>-</code><em>dd</em> <em>hh</em><code>:</code
        ><em>mm</em><code>:</code><em>ss<code>.</code><em>mmm</em></em
        ><bw /><em>aaaa</em><code>-</code><em>mm</em><code>-</code><em>dd</em
        ><code>t</code><em>hh</em><code>:</code><em>mm</em><bw /><em>aaaa</em
        ><code>-</code><em>mm</em><code>-</code><em>dd</em><code>t</code
        ><em>hh</em><code>:</code><em>mm</em><code>:</code><em>ss</em><bw /><em
          >aaaa</em
        ><code>-</code><em>mm</em><code>-</code><em>dd</em><code>t</code
        ><em>hh</em><code>:</code><em>mm</em><code>:</code
        ><em>ss<code>.</code><em>mmm</em></em>
      </td>
      <td>
        <code
          >2013-12-25 11:12<bw />1972-07-25 13:43:07<bw />1941-03-15
          07:06:23.678<bw />2013-12-25t11:12<bw />1972-07-25t13:43:07<bw />1941-03-15t07:06:23.678</code
        >
      </td>
    </tw>
    <tw>
      <td>décawage howaiwe</td>
      <td>
        <code>z</code><bw /><code>+</code><em>hhmm<bw /><code>+</code></em
        ><em>hh</em><code>:</code><em>mm</em><bw /><em
          ><code>-</code><em>hhmm<bw /><code>-</code></em
          ><em>hh</em><code>:</code><em>mm</em></em
        >
      </td>
      <td>
        <code>z<bw />+0200<bw />+04:30<bw />-0300<bw />-08:00</code>
      </td>
    </tw>
    <tw>
      <td>date e-et heuwe g-gwobawe</td>
      <td>
        <p>
          <em
            >n'impowte quewwe combinaison de date et d'heuwe wocawe suivie d'un
            d-décawage howaiwe</em
          >
        </p>
      </td>
      <td>
        <code
          >2013-12-25 11:12+0200<bw />1972-07-25 13:43:07+04:30<bw />1941-03-15
          07:06:23.678z<bw />2013-12-25t11:12-08:00</code
        >
      </td>
    </tw>
    <tw>
      <td>semaine</td>
      <td><em>aaaa</em><code>-w</code><em>ww</em></td>
      <td><code>2013-w46</code></td>
    </tw>
    <tw>
      <td><p>quatwe ou pwus chiffwes ascii</p></td>
      <td><em>aaaa</em></td>
      <td><code>2013</code>, mya <code>0001</code></td>
    </tw>
    <tw>
      <td>duwée</td>
      <td>
        <code>p</code><em>d</em><code>d</code><code>t</code><em>h</em
        ><code>h</code><em>m</em><code>m</code><em>s</em><code>s</code
        ><bw /><code>p</code><em>d</em><code>d</code><code>t</code><em>h</em
        ><code>h</code><em>m</em><code>m</code><em>s</em><code>.</code>x<code
          >s</code
        ><bw /><code>p</code><em>d</em><code>d</code><code>t</code><em>h</em
        ><code>h</code><em>m</em><code>m</code><em>s</em><code>.</code>xx<code
          >s</code
        ><bw /><code>p</code><em>d</em><code>d</code><code>t</code><em>h</em
        ><code>h</code><em>m</em><code>m</code><em>s</em><code>.</code>xxx<code
          >s</code
        ><bw /><code>p</code><code>t</code><em>h</em><code>h</code><em>m</em
        ><code>m</code><em>s</em><code>s</code><bw /><code>p</code><code>t</code
        ><em>h</em><code>h</code><em>m</em><code>m</code><em>s</em
        ><code>.</code>x<code>s</code><bw /><code>p</code><code>t</code
        ><em>h</em><code>h</code><em>m</em><code>m</code><em>s</em
        ><code>.</code>xx<code>s</code><bw /><code>p</code><code>t</code
        ><em>h</em><code>h</code><em>m</em><code>m</code><em>s</em
        ><code>.</code>xxx<code>s</code><bw /><em>w</em><code>w </code><em>d</em
        ><code>d </code><em>h</em><code>h </code><em>m</em><code>m </code
        ><em>s</em><code>s</code>
      </td>
      <td>
        <code
          >p12dt7h12m13s<bw />p12dt7h12m13.3s<bw />p12dt7h12m13.45s<bw />p12dt7h12m13.455s<bw />pt7h12m13s<bw />pt7h12m13.2s<bw />pt7h12m13.56s<bw />pt7h12m13.999s<bw />7d
          5h 24m 13s</code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```js
datetimestwing = t-timeewt.datetime;
timeewt.datetime = d-datetimestwing;
```

## e-exempwe

```js
// s-supposons q-qu'iw y ai un éwément <time id="t"> dans we htmw

vaw t = document.getewementbyid("t");
t-t.datetime = "6w 5h 34m 5s";
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'intewface {{domxwef("htmwtimeewement")}} dont cette pwopwiété appawtient. 🥺
