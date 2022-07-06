---
title: XMLHttpRequest.upload
slug: Web/API/XMLHttpRequest/upload
tags:
  - AJAX
  - API
  - Monitoring XMLHttpRequest
  - プロパティ
  - 読み取り専用
  - リファレンス
  - ファイル送信
  - アップロード
  - XHR
  - XHR アップロード
  - XMLHttpRequest
  - XMLHttpRequest アップロード
  - XMLHttpRequestUpload
  - アップロード
browser-compat: api.XMLHttpRequest.upload
translation_of: Web/API/XMLHttpRequest/upload
---
{{APIRef('XMLHttpRequest')}}

{{domxref("XMLHttpRequest")}} の `upload` プロパティは、アップロードの進捗を監視することができる {{domxref("XMLHttpRequestUpload")}} オブジェクトを返します。

これは不透過なオブジェクトですが、 {{domxref("XMLHttpRequestEventTarget")}} でもあるため、進捗を追跡するためにイベントリスナーを装着することができます。

> **Note:** このオブジェクトにイベントリスナーを装着すると、リクエストが「単純なリクエスト」ではなくなり、オリジンをまたぐ場合はプリフライトリクエストが発行されるようになります。 [CORS](/ja/docs/Web/HTTP/CORS) を参照してください。このため、イベントリスナーは {{domxref("XMLHttpRequest.send", "send()")}} を呼び出す前に登録する必要があり、そうしないとアップロードイベントが発行されなくなります。

> **Note:** また、仕様書では、イベントリスナーは {{domxref("XMLHttpRequest.open", "open()")}} の後に装着すべきとされているようです。しかし、ブラウザーはこの点に関してバグが多く、リスナーを {{domxref("XMLHttpRequest.open", "open()")}} の前に登録しないと動作しないことがよくあります。

以下のイベントは、アップロードオブジェクト上で発行され、アップロードを監視するために使用することができます。

<table class="no-markdown">
  <thead>
    <tr>
      <th>イベント</th>
      <th>イベントリスナー</th>
      <th>解説</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}</td>
      <td>
        {{domxref("XMLHttpRequest.onloadstart", "onloadstart")}}
      </td>
      <td>アップロードが始まった。</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequest/progress_event", "progress")}}</td>
      <td>
        {{domxref("XMLHttpRequest.onprogress", "onprogress")}}
      </td>
      <td>
        進捗を示すために定期的に発行されます。
      </td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequest/abort_event", "abort")}}</td>
      <td>{{domxref("XMLHttpRequest.onabort", "onabort")}}</td>
      <td>アップロード操作が中止された。</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequest/error_event", "error")}}</td>
      <td>{{domxref("XMLHttpRequest.onerror", "onerror")}}</td>
      <td>アップロードがエラーで失敗した。</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequest/load_event", "load")}}</td>
      <td>{{domxref("XMLHttpRequest.onload", "onload")}}</td>
      <td>アップロードが成功裏に完了した。</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequest/timeout_event", "timeout")}}</td>
      <td>
        {{domxref("XMLHttpRequest.ontimeout", "ontimeout")}}
      </td>
      <td>
        {{domxref("XMLHttpRequest.timeout")}} で指定された時間内に返答が届かなかったために、アップロードがタイムアウトした。
      </td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequest/loadend_event", "loadend")}}</td>
      <td>
        {{domxref("XMLHttpRequest.onloadend", "onloadend")}}
      </td>
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

- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [FileHandle API](/ja/docs/Web/API/File_Handle_API)
- [File and Directory Entries API](/ja/docs/Web/API/File_and_Directory_Entries_API)
