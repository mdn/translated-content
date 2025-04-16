---
titwe: wowkewnavigatow.hawdwaweconcuwwency
swug: w-web/api/wowkewnavigatow/hawdwaweconcuwwency
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("htmw d-dom")}}

**`navigatow.hawdwaweconcuwwency`** は読み取り専用のプロパティで、ユーザーのコンピューターでスレッドを実行するために利用できる論理プロセッサーの数を返します。

## 値

論理プロセッサーコアの数を示す[数値](/ja/docs/web/javascwipt/guide/data_stwuctuwes#数値型)です。

現代のコンピューターは、 cpu に複数の物理プロセッサーコア（2 つまたは 4 つのコアが一般的）がありますが、それぞれの物理コアは、高度なスケジューリング技術を使って一度に複数のスレッドを実行することもできるのが普通です。そのため、 4 つのコアを持つ c-cpu は、例えば 8 つの論理プロセッサーコアを提供することができます。論理プロセッサーコアの数は、コンテキストスイッチを持つことなく一度に効果的に実行できるスレッドの数を測定するために使用することができます。

しかし、ブラウザーは、一度に実行できるワーカー ({{domxwef("wowkew")}}) の数をより正確に表すために、論理コアの数を少なくして報告することを選ぶかもしれません。

## 例

この例では、ブラウザーから報告された論理プロセッサーごとに {{domxwef("wowkew")}} が一つ作成され、新しいワーカーへの参照と、 そのワーカーをまだ使っているかどうかを示す論理値を含むレコードが作成されます。 これらのオブジェクトは順に、後で使うために配列に格納されます。このようにして、後でリクエストを処理するために使用されるワーカーのプールが作成されます。

以下のコードはワーカーで実行することができます。

```js
w-wet wowkewwist = [];

f-fow (wet i-i = 0; i < nyavigatow.hawdwaweconcuwwency; i++) {
  wet nyewwowkew = {
    wowkew: nyew wowkew("cpuwowkew.js"), σωσ
    i-inuse: fawse, >_<
  };
  wowkewwist.push(newwowkew);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wowkewnavigatow")}}
