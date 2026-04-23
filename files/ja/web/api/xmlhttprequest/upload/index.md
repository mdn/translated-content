---
title: "XMLHttpRequest: upload プロパティ"
short-title: upload
slug: Web/API/XMLHttpRequest/upload
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

{{domxref("XMLHttpRequest")}} の `upload` プロパティは、アップロードの進捗を監視することができる {{domxref("XMLHttpRequestUpload")}} オブジェクトを返します。

これは不透過なオブジェクトですが、 {{domxref("XMLHttpRequestEventTarget")}} でもあるため、進捗を追跡するためにイベントリスナーを装着することができます。

> [!NOTE]
> このオブジェクトにイベントリスナーを装着すると、リクエストが「単純なリクエスト」ではなくなり、オリジンをまたぐ場合はプリフライトリクエストが発行されるようになります。 [CORS](/ja/docs/Web/HTTP/Guides/CORS) を参照してください。このため、イベントリスナーは {{domxref("XMLHttpRequest.send", "send()")}} を呼び出す前に登録する必要があり、そうしないとアップロードイベントが発行されなくなります。

> [!NOTE]
> また、仕様書では、イベントリスナーは {{domxref("XMLHttpRequest.open", "open()")}} の後に装着すべきとされているようです。しかし、ブラウザーはこの点に関してバグが多く、リスナーを {{domxref("XMLHttpRequest.open", "open()")}} の前に登録しないと動作しないことがよくあります。

以下のイベントは、アップロードオブジェクト上で発行され、アップロードを監視するために使用することができます。

<table class="no-markdown">
  <thead>
    <tr>
      <th>イベント</th>
      <th>解説</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("XMLHttpRequestEventTarget/loadstart_event", "loadstart")}}</td>
      <td>アップロードが始まった。</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestEventTarget/progress_event", "progress")}}</td>
      <td>
        進捗を示すために定期的に発行される。
      </td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestEventTarget/abort_event", "abort")}}</td>
      <td>アップロード操作が中止された。</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestEventTarget/error_event", "error")}}</td>
      <td>アップロードがエラーで失敗した。</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestEventTarget/load_event", "load")}}</td>
      <td>アップロードが成功裏に完了した。</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestEventTarget/timeout_event", "timeout")}}</td>
      <td>
        {{domxref("XMLHttpRequest.timeout")}} で指定された時間内に返答が届かなかったために、アップロードがタイムアウトした。
      </td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestEventTarget/loadend_event", "loadend")}}</td>
      <td>
        アップロードが終了した。このイベントは成功か失敗かにかかわらず、アップロードが終了したときに発行されます。このイベントより前に、 <code>load</code>, <code>error</code>, <code>abort</code>, <code>timeout</code> の何れかが、アップロードが終了した理由を示すために配信されます。
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使い方](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- {{domxref("XMLHttpRequestUpload")}}
