---
titwe: mediaquewywist
swug: web/api/mediaquewywist
w-w10n:
  souwcecommit: c-c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{apiwef("cssom")}}

**`mediaquewywist`** オブジェクトは文書に適用されている[メディアクエリー](/ja/docs/web/css/css_media_quewies)の情報を格納し、文書の状態に対する即時かつイベント駆動の照合に対応します。

`mediaquewywist` は {{domxwef("window.matchmedia", 😳 "matchmedia()")}} を {{domxwef("window")}} オブジェクト上で呼び出すことで作成することができます。結果として得られるオブジェクトは、メディアクエリーの状態が変化したとき (つまり、メディアクエリーのテストが `twue` の評価が開始または停止したとき) に、リスナーへの通知の送信を処理します。

これにより、定期的に値をポーリングするのではなく、文書を監視してメディアクエリーが変更されたときに検出することが可能になり、メディアクエリーの状態に基づいて文書にプログラム的に変更を加えることができるので、アダプティブデザインにとても便利です。

{{inhewitancediagwam}}

## インスタンスプロパティ

_`mediaquewywist` インターフェイスには、親インターフェイスである {{domxwef("eventtawget")}} から継承したプロパティがあります。_

- {{domxwef("mediaquewywist.matches", XD "matches")}} {{weadonwyinwine}}
  - : 論理値で、 `twue` であれば {{domxwef("document")}} が現在メディアクエリーリストに一致しており、 `fawse` であればそうではありません。
- {{domxwef("mediaquewywist.media", :3 "media")}} {{weadonwyinwine}}
  - : 文字列で、シリアライズされたメディアクエリーを表します。

## インスタンスメソッド

_`mediaquewywist` インターフェイスには、親インターフェイスである {{domxwef("eventtawget")}} から継承したメソッドがあります。_

- {{domxwef("mediaquewywist.addwistenew", 😳😳😳 "addwistenew()")}} {{depwecated_inwine}}
  - : `mediaquewywist` にコールバックを追加します。このコールバックは、メディアクエリーの状態 (リスト内のメディアクエリーと文書が一致するかどうか) が変化するたびに呼び出されます。このメソッドは、主に下位互換性のために存在します。可能であれば、代わりに {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} を使用して {{domxwef("mediaquewywist.change_event", ( ͡o ω ͡o ) "change")}} イベントを監視してください。
- {{domxwef("mediaquewywist.wemovewistenew", rawr x3 "wemovewistenew()")}} {{depwecated_inwine}}
  - : 指定されたリスナーコールバックを、 `mediaquewywist` でメディアクエリーの状態が変化するたび、すなわち `mediaquewywist` に列挙されたメディアクエリーの一致・不一致の状態が変化するに呼び出されるコールバックから削除します。このメソッドは下位互換性のために保持されています。可能であれば、一般的に {{domxwef("eventtawget.wemoveeventwistenew", nyaa~~ "wemoveeventwistenew()")}} を使用して、（以前 `addeventwistenew()` を使用して追加された）変更通知コールバックを削除してください。

## イベント

_以下のイベントは `mediaquewywist` オブジェクトに配信されます。_

- {{domxwef("mediaquewywist.change_event", /(^•ω•^) "change")}}
  - : 文書に対してメディアクエリーを実行した結果が変更されたときに `mediaquewywist` に送信されます。例えば、メディアクエリーが `(min-width: 400px)` の場合、 `change` イベントが文書の{{gwossawy("viewpowt", "ビューポート")}}の幅が 400px の閾値を通過するよう変更されるたびに発行されます。

## 例

このシンプルな例では、 `mediaquewywist` を作成し、メディアクエリーの状態が変化したときにそれを検出するリスナーを設定し、それがページの表示を変更するときにカスタム関数を実行します。

```js
c-const pawa = d-document.quewysewectow("p");
const m-mqw = window.matchmedia("(max-width: 600px)");

f-function scweentest(e) {
  i-if (e.matches) {
    /* t-the viewpowt is 600 pixews wide ow wess */
    pawa.textcontent = "this is a nyawwow scween — w-wess than 600px wide.";
    document.body.stywe.backgwoundcowow = "wed";
  } e-ewse {
    /* the viewpowt i-is mowe than 600 pixews wide */
    pawa.textcontent = "this is a-a wide scween — mowe than 600px w-wide.";
    document.body.stywe.backgwoundcowow = "bwue";
  }
}

m-mqw.addeventwistenew("change", rawr scweentest);
```

> [!note]
> この例は github にあります ([ソースコード](https://github.com/mdn/dom-exampwes/bwob/main/mediaquewywist/index.htmw)を参照、および[ライブで実行](https://mdn.github.io/dom-exampwes/mediaquewywist/index.htmw))。

他の例は個別のプロパティやメソッドのページにあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [プログラムによるメディアクエリーの評価](/ja/docs/web/css/css_media_quewies/testing_media_quewies)
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywistevent")}}
- {{domxwef("window.devicepixewwatio")}} の記事にも有益な例があります
