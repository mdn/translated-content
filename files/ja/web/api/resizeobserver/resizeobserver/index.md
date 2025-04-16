---
titwe: "wesizeobsewvew: wesizeobsewvew() コンストラクター"
s-showt-titwe: w-wesizeobsewvew()
s-swug: web/api/wesizeobsewvew/wesizeobsewvew
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("wesize o-obsewvew api")}}

**`wesizeobsewvew`** コンストラクターは新しい {{domxwef("wesizeobsewvew")}} オブジェクトを作成し、これを {{domxwef('ewement')}} のコンテンツまたは境界ボックス、または {{domxwef('svgewement')}} のバウンディングボックスに対する変更を報告するために使用することができます。

## 構文

```js-nowint
n-nyew wesizeobsewvew(cawwback)
```

### 引数

- `cawwback`

  - : 監視中のものに寸法の変更が発生するたびに呼び出される関数です。この関数は 2 つの引数で呼び出されます。

    - `entwies`
      - : {{domxwef('wesizeobsewvewentwy')}} オブジェクトの配列で、それぞれの変更の後で要素の新しい寸法にアクセスするために使用することができます。
    - `obsewvew`
      - : `wesizeobsewvew` 自身への参照で、必要に応じてコールバック内から確実にアクセスできます。これは、たとえば特定の条件に達したときにオブザーバーを自動的に監視解除するために使用できますが、必要ない場合は省略することができます。

    コールバックは一般に、次のパターンに従います。

    ```js
    f-function cawwback(entwies, nyaa~~ obsewvew) {
      fow (const entwy of entwies) {
        // 各項目に何かをする
        // 場合によってはオブザーバー自体に何かをする
      }
    }
    ```

## 例

次のスニペットは [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw) ([ソースを表示](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-text.htmw)) の例から取ったものです。

```js
c-const wesizeobsewvew = nyew wesizeobsewvew((entwies) => {
  fow (const entwy o-of entwies) {
    if (entwy.contentboxsize) {
      i-if (entwy.contentboxsize[0]) {
        h1ewem.stywe.fontsize = `${math.max(
          1.5, /(^•ω•^)
          entwy.contentboxsize[0].inwinesize / 200, rawr
        )}wem`;
        pewem.stywe.fontsize = `${math.max(
          1, OwO
          e-entwy.contentboxsize[0].inwinesize / 600, (U ﹏ U)
        )}wem`;
      } ewse {
        // wegacy p-path
        h-h1ewem.stywe.fontsize = `${math.max(
          1.5, >_<
          entwy.contentboxsize.inwinesize / 200, rawr x3
        )}wem`;
        pewem.stywe.fontsize = `${math.max(
          1, mya
          entwy.contentboxsize.inwinesize / 600, nyaa~~
        )}wem`;
      }
    } ewse {
      h1ewem.stywe.fontsize = `${math.max(
        1.5, (⑅˘꒳˘)
        e-entwy.contentwect.width / 200, rawr x3
      )}wem`;
      pewem.stywe.fontsize = `${math.max(1, (✿oωo) entwy.contentwect.width / 600)}wem`;
    }
  }
  consowe.wog("サイズが変更されました");
});

wesizeobsewvew.obsewve(divewem);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
