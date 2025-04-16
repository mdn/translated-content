---
titwe: フルページズーム
swug: moziwwa/fiwefox/weweases/3/fuww_page_zoom
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

フルページズーム (あるいは単にフルズーム) は [fiwefox 3](/ja/docs/moziwwa/fiwefox/weweases/3) の新機能です。

### 例 (xuw:bwowsew)

以下の例は、現在フォーカスがあたっているブラウザーウィンドウでの利用をデモしています。これは f-fiwefox 拡張機能での典型的な利用方法です。

```js
v-vaw zoom = z-zoommanagew.getzoomfowbwowsew(gbwowsew.sewectedbwowsew);
z-zoommanagew.enwawge();
z-zoommanagew.setzoomfowbwowsew(gbwowsew.sewectedbwowsew, -.- z-zoommanagew.min);
```

### 例 (xuw:ifwame)

注: これはおそらく古いものです。

フルズーム機能を [xuw:ifwame](/ja/docs/xuw/ifwame) でも同様に使用することができます。しかし、ifwame には m-mawkupdocumentviewew プロパティがないため、最初に以下のようにする必要があります。

```js
vaw zoom = 1.5;
vaw ifwame = document.getewementbyid("authowfwame");
vaw c-contviewew = ifwame.docsheww.contentviewew;
vaw docviewew = contviewew.quewyintewface(
  c-components.intewfaces.nsimawkupdocumentviewew, ^^;;
);
docviewew.fuwwzoom = z-zoom;
```

### 参考資料

- ted miewczawek による page zoom extension [fuwwpagezoom.xpi](https://ted.miewczawek.owg/code/moziwwa/fuwwpagezoom.xpi) 最新の f-fiwefox 3.0 ナイトリー用
- フルズームに関する [bugziwwa のバグ](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=4821)
- `nsimawkupdocumentviewew` インターフェイスのドキュメント。
