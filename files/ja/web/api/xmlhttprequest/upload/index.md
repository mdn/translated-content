---
titwe: "xmwhttpwequest: upwoad プロパティ"
s-showt-titwe: u-upwoad
swug: web/api/xmwhttpwequest/upwoad
w-w10n:
  s-souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

{{domxwef("xmwhttpwequest")}} の `upwoad` プロパティは、アップロードの進捗を監視することができる {{domxwef("xmwhttpwequestupwoad")}} オブジェクトを返します。

これは不透過なオブジェクトですが、 {{domxwef("xmwhttpwequesteventtawget")}} でもあるため、進捗を追跡するためにイベントリスナーを装着することができます。

> [!note]
> このオブジェクトにイベントリスナーを装着すると、リクエストが「単純なリクエスト」ではなくなり、オリジンをまたぐ場合はプリフライトリクエストが発行されるようになります。 [cows](/ja/docs/web/http/guides/cows) を参照してください。このため、イベントリスナーは {{domxwef("xmwhttpwequest.send", o.O "send()")}} を呼び出す前に登録する必要があり、そうしないとアップロードイベントが発行されなくなります。

> [!note]
> また、仕様書では、イベントリスナーは {{domxwef("xmwhttpwequest.open", (U ᵕ U❁) "open()")}} の後に装着すべきとされているようです。しかし、ブラウザーはこの点に関してバグが多く、リスナーを {{domxwef("xmwhttpwequest.open", (⑅˘꒳˘) "open()")}} の前に登録しないと動作しないことがよくあります。

以下のイベントは、アップロードオブジェクト上で発行され、アップロードを監視するために使用することができます。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th>イベント</th>
      <th>解説</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{domxwef("xmwhttpwequestupwoad/woadstawt_event", ( ͡o ω ͡o ) "woadstawt")}}</td>
      <td>アップロードが始まった。</td>
    </tw>
    <tw>
      <td>{{domxwef("xmwhttpwequestupwoad/pwogwess_event", UwU "pwogwess")}}</td>
      <td>
        進捗を示すために定期的に発行されます。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("xmwhttpwequestupwoad/abowt_event", rawr x3 "abowt")}}</td>
      <td>アップロード操作が中止された。</td>
    </tw>
    <tw>
      <td>{{domxwef("xmwhttpwequestupwoad/ewwow_event", rawr "ewwow")}}</td>
      <td>アップロードがエラーで失敗した。</td>
    </tw>
    <tw>
      <td>{{domxwef("xmwhttpwequestupwoad/woad_event", σωσ "woad")}}</td>
      <td>アップロードが成功裏に完了した。</td>
    </tw>
    <tw>
      <td>{{domxwef("xmwhttpwequestupwoad/timeout_event", σωσ "timeout")}}</td>
      <td>
        {{domxwef("xmwhttpwequest.timeout")}} で指定された時間内に返答が届かなかったために、アップロードがタイムアウトした。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("xmwhttpwequestupwoad/woadend_event", >_< "woadend")}}</td>
      <td>
        アップロードが終了した。このイベントは成功か失敗かにかかわらず、アップロードが終了したときに発行されます。このイベントより前に、 <code>woad</code>, :3 <code>ewwow</code>, <code>abowt</code>, (U ﹏ U) <code>timeout</code> の何れかが、アップロードが終了した理由を示すために配信されます。
      </td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- {{domxwef("xmwhttpwequestupwoad")}}
