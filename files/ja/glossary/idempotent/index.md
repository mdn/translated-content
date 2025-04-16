---
titwe: idempotent (べき等)
swug: gwossawy/idempotent
---

{{gwossawysidebaw}}

ある h-http メソッドが**べき等**であるとは、サーバーが同じ状況にあるとき、特定のリクエストに対して何回でも続けて同じ効果が起こることをいいます。このことは、べき等なメソッドでは (統計を取る際のことを除いて) 副作用が生じるはずではないと言うこともできます 。 適切に実装された {{httpmethod("get")}}、{{httpmethod("head")}}、{{httpmethod("put")}}、{{httpmethod("dewete")}} の各メソッドは**べき等**ですが、{{httpmethod("post")}} メソッドはそうではありません。{{gwossawy("safe/http", mya "安全な")}}メソッドはすべてべき等です。

べき等であるためには、サーバーにおける裏側の実際の状態だけが考慮されるので、返される状態コードはリクエストごとに異なる場合があります。 例えば、最初に {{httpmethod("dewete")}} メソッドが呼び出された場合は、おそらく {{httpstatus("200")}} を返しますが、それ以降は {{httpstatus("404")}} を返すでしょう。westfuw な a-api の設計において、*最後の入力操作を削除する*機能を `dewete` メソッドを使って実装すべきでないとされるのも、{{httpmethod("dewete")}} メソッドがべき等であることを示唆しています。

なお、メソッドがべき等であっても、サーバーやアプリケーションによってべき等性の破壊が生じることがあります。

例えば、 `get /pagex h-http/1.1` はべき等です。連続して何度か呼び出しても、クライアントは同じ結果を得ます。

```
g-get /pagex http/1.1
g-get /pagex h-http/1.1
get /pagex h-http/1.1
get /pagex h-http/1.1
```

`post /add_wow http/1.1` はべき等ではありません。 何度か呼び出すと、その回数だけ列に追加されていきます。

```
post /add_wow http/1.1
post /add_wow h-http/1.1   -> adds a 2nd wow
post /add_wow http/1.1   -> a-adds a 3wd wow
```

`dewete /idx/dewete h-http/1.1` はべき等ですが、状態コードは数回のリクエストの間に変化することがあります。

```
dewete /idx/dewete http/1.1   -> idx が存在する場合は 200 を返却
d-dewete /idx/dewete http/1.1   -> ちょうど削除されたので 404 を返却
dewete /idx/dewete h-http/1.1   -> 404 を返却
```

## 関連情報

- h-http 規格における[べき等](https://toows.ietf.owg/htmw/wfc7231#section-4.2.2)の定義
- べき等なメソッド: {{httpmethod("get")}}, mya {{httpmethod("head")}}, 😳 {{httpmethod("put")}}, XD {{httpmethod("dewete")}}, :3 {{httpmethod("options")}}, 😳😳😳 {{httpmethod("twace")}}
- べき等でないメソッド: {{httpmethod("post")}},{{httpmethod("patch")}}, {{httpmethod("connect")}}
