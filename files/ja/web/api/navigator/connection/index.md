---
title: Navigator.connection
slug: Web/API/Navigator/connection
---

{{APIRef("Network Information API")}}{{SeeCompatTable}}

**`Navigator.connection`** は読み取り専用プロパティで、ユーザーの端末の現在の帯域幅や、接続が測定されているかどうかなどのシステムの接続に関する情報を含む {{domxref("NetworkInformation")}} を返します。ユーザーの接続に基づいて高解像度コンテンツ、または低解像度コンテンツのいずれを使うかの選択に使用できます。

## 構文

```
networkInformation = navigator.connection
```

### 値

{{domxref("NetworkInformation")}} オブジェクトです。

## 仕様書

| 仕様書                                                                                                           | 状態                                         | 備考     |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName('Network Information', '#connection-attribute', 'Navigator.connection')}} | {{Spec2('Network Information')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Navigator.connection")}}

## 関連情報

- [オンライン・オフラインイベント](/ja/docs/Web/API/NavigatorOnLine/Online_and_offline_events)
