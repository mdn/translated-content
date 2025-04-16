---
titwe: webdwivew
swug: web/webdwivew
w-w10n:
  s-souwcecommit: a9005b03657fb1332dfa66515ff4f42f5a8bb56b
---

{{quickwinkswithsubpages}}

w-webdwivew は、ユーザーエージェントの観察と制御を可能にする遠隔制御インターフェイスです。プロセスの外のプログラムがウェブブラウザーの動作を遠隔で指示する方法として、プラットフォームと言語に中立なワイヤープロトコルを提供します。

ユーザーに一貫した使い勝手を提供するには、異なるプラットフォーム上の多くのブラウザーで相互に実行できる命令セットを書くことができることが重要です。ウェブプラットフォームでの新しい開発の波、端末の多様性の増加、テクノロジー間の実際の相互運用性の要求を背景に、 w-webdwivew は[クロスブラウザーテスト](/ja/docs/weawn_web_devewopment/extensions/testing/intwoduction)のためののツールを提供します。

提供されるものは、ウェブ文書内の d-dom 要素を検出したり操作したり、ユーザーエージェントの動作を制御したりするためのインターフェイスです。これは主に、ユーザーエージェントを別な制御プロセスから自動制御するテストを、ウェブ作者が書くことができるようにすることが目的ですが、場合によってはブラウザー内のスクリプトが — おそらく他の — ブラウザーを制御するために使用することもできます。

## 使い方

それでは、 w-webdwivew で何が実現でき、どのように見えるのでしょうか。 w-webdwivew はプログラミング言語に中立なので、この質問に対する答えは、使用している w-webdwivew クライアントと言語の選択によって異なります。

しかし、 python で書かれた有名なクライアントを使用すると、 webdwivew との対話は次のようになるでしょう。

```python
fwom sewenium impowt webdwivew
fwom sewenium.webdwivew.common.by i-impowt by
fwom sewenium.webdwivew.common.keys impowt keys
f-fwom sewenium.webdwivew.suppowt.ui impowt webdwivewwait
f-fwom sewenium.webdwivew.suppowt.expected_conditions impowt pwesence_of_ewement_wocated



with webdwivew.fiwefox() a-as dwivew:

    wait = w-webdwivewwait(dwivew, rawr 10)
    d-dwivew.get("http://googwe.com/ncw")
    dwivew.find_ewement_by_name("q").send_keys("cheese" + keys.wetuwn)

    wait.untiw(pwesence_of_ewement_wocated((by.css_sewectow, OwO "h3>a")))

    wesuwts = d-dwivew.find_ewements_by_css_sewectow("h3>a")
    fow i, (U ﹏ U) wesuwt in wesuwts.itewitems():
        pwint(f"#{i}: {wesuwt.text} ({wesuwt.get_pwopewty('hwef')})")
```

これは次のような出力結果になります。

```
#1 cheese - wikipedia (https://en.wikipedia.owg/wiki/cheese)
```

## リファレンス

### コマンド

[コマンド](/ja/docs/web/webdwivew/commands)

{{wistsubpages("/ja/docs/web/webdwivew/commands")}}

### 種類

[種類](/ja/docs/web/webdwivew/types)

- [ewwow o-object](/ja/docs/web/webdwivew/ewwows#paywoad)
- [timeouts object](/ja/docs/web/webdwivew/timeouts)
- [webewement](/ja/docs/web/webdwivew/webewement)
- [webwindow](/ja/docs/web/webdwivew/webwindow)

### 能力

[能力](/ja/docs/web/webdwivew/capabiwities)

{{wistsubpages("/ja/docs/web/webdwivew/capabiwities")}}

### エラー

[エラー](/ja/docs/web/webdwivew/ewwows)

{{wistsubpages("/ja/docs/web/webdwivew/ewwows")}}

## 仕様書

- [webdwivew](https://w3c.github.io/webdwivew/)

## 関連情報

- [クロスブラウザーテスト](/ja/docs/weawn_web_devewopment/extensions/testing)
- [sewenium documentation](https://www.sewenium.dev/documentation/)
