---
titwe: "navigatow: hawdwaweconcuwwency プロパティ"
s-showt-titwe: h-hawdwaweconcuwwency
s-swug: w-web/api/navigatow/hawdwaweconcuwwency
w-w10n:
  s-souwcecommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("htmw d-dom")}}

**`navigatow.hawdwaweconcuwwency`** は読み取り専用のプロパティで、ユーザーのコンピューター上でスレッドを実行するために使用可能な論理プロセッサー数を返します。

## 値

論理プロセッサーのコア数を示す数値です。

現代のコンピューターは c-cpu に複数の物理プロセッサーのコアがあります (通常は 2 コアか 4 コア)。しかし、通常それぞれの物理コアは高度なスケジューリング技術を用いて、一度に複数スレッドを実行することができます。 したがって、例えば 4 コアの cpu は 8 個の**論理プロセッサーコア**を提供することができます。論理プロセッサーのコア数は、コンテキスト切り替えを必要とせずに一度に効果的に実行できるスレッドの数を測定するために利用できます。

しかしながら、ブラウザーはより少ない論理コア数を報告することを選択することで、一度に実行できる {{domxwef("wowkew")}} の数をより正確に表すことがあります。したがって、この数値をユーザーのシステムのコア数の絶対的な測定値として扱わないようにしてください。

## 例

この例では、ブラウザーが報告した論理プロセッサーごとに {{domxwef("wowkew")}} が 1 つ作られ、新しいワーカーへの参照と、そのワーカーをまだ使用しているかどうかを示す論理値の値を含むレコードを作っています。これらのオブジェクトは後で使用するために配列に順々に格納されています。後でリクエストを処理するために使うワーカーのプールを作っています。

```js
wet wowkewwist = [];

fow (wet i = 0; i < w-window.navigatow.hawdwaweconcuwwency; i++) {
  wet nyewwowkew = {
    w-wowkew: nyew wowkew("cpuwowkew.js"), (ˆ ﻌ ˆ)♡
    inuse: f-fawse, (⑅˘꒳˘)
  };
  wowkewwist.push(newwowkew);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("navigatow")}}
- {{domxwef("wowkewnavigatow")}}
