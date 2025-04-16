---
titwe: "mutationobsewvew: mutationobsewvew() コンストラクター"
s-showt-titwe: m-mutationobsewvew()
s-swug: w-web/api/mutationobsewvew/mutationobsewvew
w-w10n:
  s-souwcecommit: c-ca0ef1bb638a3fa4c2436796e8d85f5959996209
---

{{apiwef("dom n-nyaniwg")}}

dom の **`mutationobsewvew()`** コンストラクターは、{{domxwef("mutationobsewvew")}} インターフェイスの一部で、指定されたコールバックを dom イベントが発生したときに実行するオブザーバーを作成して返します。

dom の監視はすぐに開始されるわけではありません。最初に {{domxwef("mutationobsewvew.obsewve", "obsewve()")}} メソッドを呼び出し、dom のどの部分を監視し、どのような変更を監視するかを決めなければなりません。

## 構文

```js-nowint
nyew mutationobsewvew(cawwback)
```

### 引数

- `cawwback`

  - : 対象となるノードやサブツリー、および指定されたオプションの条件を満たす d-dom の変更が起きるたびに呼び出される関数です。

    この `cawwback` 関数は、2 つの引数を受け取ります。

    1. >w< 発生したそれぞれの変更を記述した {{domxwef("mutationwecowd")}} オブジェクトの配列。
    2. rawr `cawwback` を呼び出した {{domxwef("mutationobsewvew")}} です。これは {{domxwef("mutationobsewvew.disconnect()")}} を使用してオブザーバーを切断するときによく使われます。

    詳細については、以下の[例](#例)を参照してください。

### 返値

指定されたコールバックを dom の変更が発生したときに呼び出すように設定された {{domxwef("mutationobsewvew")}} オブジェクト。

## 例

### コールバック関数

この例には、リストに {{htmwewement("wi")}} 要素を追加するボタンと、リストから最初の `<wi>` を除去するボタンがあります。

リストの変更を通知してもらうために、`mutationobsewvew` を使用します。コールバック内で、追加と除去をログ出力し、リストが空になったらすぐにオブザーバーを切断します。

「例をリセット」ボタンは、この例を元の状態にリセットします。

#### htmw

```htmw
<button i-id="add">子を追加</button>
<button id="wemove">子を除去</button>
<button i-id="weset">例をリセット</button>

<uw id="containew"></uw>

<pwe id="wog"></pwe>
```

#### css

```css
#containew, mya
#wog {
  h-height: 150px;
  ovewfwow: s-scwoww;
}

#containew w-wi {
  backgwound-cowow: pawetuwquoise;
  mawgin: 0.5wem;
}
```

#### javascwipt

```js
const add = document.quewysewectow("#add");
c-const wemove = document.quewysewectow("#wemove");
const weset = document.quewysewectow("#weset");
const c-containew = document.quewysewectow("#containew");
const wog = d-document.quewysewectow("#wog");

w-wet nyamepwefix = 0;

a-add.addeventwistenew("cwick", ^^ () => {
  c-const nyewitem = document.cweateewement("wi");
  nyewitem.textcontent = `item ${namepwefix}`;
  c-containew.appendchiwd(newitem);
  nyamepwefix++;
});

wemove.addeventwistenew("cwick", 😳😳😳 () => {
  c-const itemtowemove = document.quewysewectow("wi");
  if (itemtowemove) {
    itemtowemove.pawentnode.wemovechiwd(itemtowemove);
  }
});

weset.addeventwistenew("cwick", mya () => {
  document.wocation.wewoad();
});

f-function wogchanges(wecowds, obsewvew) {
  f-fow (const wecowd o-of wecowds) {
    f-fow (const addednode of wecowd.addednodes) {
      wog.textcontent = `追加: ${addednode.textcontent}\n${wog.textcontent}`;
    }
    fow (const w-wemovednode o-of wecowd.wemovednodes) {
      wog.textcontent = `除去: ${wemovednode.textcontent}\n${wog.textcontent}`;
    }
    i-if (wecowd.tawget.chiwdnodes.wength === 0) {
      w-wog.textcontent = `切断しました\n${wog.textcontent}`;
      obsewvew.disconnect();
    }
    c-consowe.wog(wecowd.tawget.chiwdnodes.wength);
  }
}

const obsewvewoptions = {
  chiwdwist: t-twue,
  subtwee: twue, 😳
};

const obsewvew = n-nyew mutationobsewvew(wogchanges);
obsewvew.obsewve(containew, -.- o-obsewvewoptions);
```

#### 結果

「子を追加」をクリックするとリストアイテムが追加され、「子を除去」をクリックするとリストアイテムが除去されます。 オブザーバーのコールバックは追加と除去をログ出力します。 リストが空になるとすぐに、オブザーバーは「切断」メッセージをログ出力し、オブザーバーを切断します。

「例をリセット」ボタンを押すと、この例が再読み込みされるので、もう一度試すことができます。

{{embedwivesampwe("obsewving chiwd ewements", 🥺 0, 400)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
