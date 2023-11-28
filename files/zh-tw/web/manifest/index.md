---
title: Web App Manifest
slug: Web/Manifest
---

{{SeeCompatTable}}

Web App manifest 是一個 JSON 格式的文件，它提供了應用程式相關的資訊（像是名稱、作者、圖示、描述）。 manifest 的功用是將 Web 應用程式安裝到設備的主畫面，為使用者提供更快速的訪問和更豐富的體驗。

Web App manifests 是屬於 [progressive web apps](/zh-TW/docs/Web/Progressive_web_apps) 的 Web 技術系列的一部分， 這是一個能不透過 App 商店就能被安裝到設備主畫面的 Web 應用程式，伴隨著其他功能，比如離線使用和通知的接收發送。

## 部署 manifest

Web app manifest 的部署只需要在 HTML 文件中的 [head](/zh-TW/docs/Web/HTML/Element/head) 區域加上 [link 元素](/zh-TW/docs/Web/HTML/Element/link)即可。

```html
<link rel="manifest" href="/manifest.json" />
```

## manifest 範例

```json
{
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#fff",
  "description": "A simply readable Hacker News app.",
  "icons": [
    {
      "src": "images/touch/homescreen48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen168.png",
      "sizes": "168x168",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "web"
    },
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
    }
  ]
}
```

## 成員

### `background_color`

定義 Web 應用程式預期的背景顏色。 其值雖然與應用程式樣式表中的值有所重複，但是在 manifest 已可用而樣式表載入之前，瀏覽器可使用該值來繪製 Web 應用程式的背景色。 這能在 Web 應用程式的啟動和載入內容之間創建平順的過場。

```json
"background_color": "red"
```

> **備註：** `background_color` 成員僅用於改善 Web 應用程式載入時體驗，並且當 Web 應用程式的樣式表可用時，使用者代理不能再將其用作背景顏色。

### `description`

提供一段描述來形容這個 Web 應用程式的作用是什麼。

```json
"description": "The app that helps you find the best food in town!"
```

### `dir`

指定一個對於 `name`、`short_name`、`description` 等成員的主要書寫方向。 包含 `lang` 成員，其能夠為右至左書寫的語言提供幫助。

```json
"dir": "rtl",
"lang": "ar",
"short_name": "أنا من التطبيق!"
```

其值可以是下列的其中之一：

- `ltr`（左至右）
- `rtl`（右至左）
- `auto`（讓瀏覽器根據 Unicode 雙向演算法對書寫方向做出最佳的猜測）

> **備註：** 當省略其值時，預設為 `auto`。

### `display`

定義開發者喜好的 Web 應用程式顯示模式。

```json
"display": "standalone"
```

有效值：

| 顯示模式     | 描述                                                                                                                                                                           | Fallback 顯示模式 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `fullscreen` | 所有可用的顯示區域都被填充並且不顯示使用者代理 {{Glossary("chrome")}} 。                                                                                                       | `standalone`      |
| `standalone` | 這看起來和感覺上就像是獨立應用程式一樣，包括有不同的執行視窗、有圖示的應用程式啟動器 ... 等等。 在這模式下，使用者代理將不包含控制導覽列，但能包含其他的 UI 元素，像是狀態列。 | `minimal-ui`      |
| `minimal-ui` | 這看起來和感覺上就像是獨立應用程式一樣，但將有控制導覽列 UI 元素的最小設置，元素會因瀏覽器而不同。                                                                             | `browser`         |
| `browser`    | 預設值。 應用程式如常規般地被開啟於瀏覽器分頁或新視窗，依瀏覽器與平台而不同。                                                                                                  | (None)            |

> **備註：** 你能根據顯示模式選擇性地將 CSS [display-mode](/docs/Web/CSS/@media/display-mode) media 功能運用於你的應用程式，這可以提供一致的使用者體驗不管是由網址開啟網站或者由桌面圖示啟動。

### `icons`

指定一個陣列，其包含可以在不同上下文情況當中做為應用程式圖示的物件。 舉例來說，其可能被用作代表該 web 應用程式出現在其他應用程式的列表當中，或是作業系統的任務切換器 task switcher 與系統偏好設定 system preferences。

```json
"icons": [
  {
    "src": "icon/lowres.webp",
    "sizes": "48x48",
    "type": "image/webp"
  },
  {
    "src": "icon/lowres",
    "sizes": "48x48"
  },
  {
    "src": "icon/hd_hi.ico",
    "sizes": "72x72 96x96 128x128 256x256"
  },
  {
    "src": "icon/hd_hi.svg",
    "sizes": "72x72"
  }
]
```

圖示物件能包含下列的值：

| 成員    | 描述                                                                                      |
| ------- | ----------------------------------------------------------------------------------------- |
| `sizes` | 以空白間隔各圖片尺吋的一個字串。                                                          |
| `src`   | 圖檔的路徑。 若 src 為相對路徑，則網址將以 manifest 的位置為基準。                        |
| `type`  | 關於圖片媒體類型的提示。 其使用目的是允許使用者代理快速地去忽略其不支持的媒體類型的圖片。 |

### `lang`

指定一個對於 `name`、`short_name` 等成員的主要語言。 其值限單一種語言標籤的字串。

```json
"lang": "en-US"
```

### `name`

提供一個人類可讀的應用程式名稱，其值是對使用者顯示的，可能在其他應用程式的列表之中，或是做為圖示的標籤。

```json
"name": "Google I/O 2017"
```

### `orientation`

定義預設的顯示方向，其將作用在 all the web application's top level {{Glossary("Browsing context", "browsing contexts")}}.

```json
"orientation": "portrait-primary"
```

其值可以是下列的其中之一：

- `any`
- `natural`
- `landscape`
- `landscape-primary`
- `landscape-secondary`
- `portrait`
- `portrait-primary`
- `portrait-secondary`

### `prefer_related_applications`

提供一個布林值告訴使用者代理是否要在 Web 應用程式上去推薦一個相關的應用程式（見下文）給使用者。 這應該只被使用在當原生應用程式提供了 Web 應用程式無法替代其功用的時候。

```json
"prefer_related_applications": false
```

> **備註：** 當省略其值時，預設為 `false。`

### `related_applications`

指定一個包含「應用程式物件」的陣列，其物件用以表示一個能被底層平台安裝或訪問的原生應用程式 — 例如能由 Google Play 商店獲取的原生 Android 應用程式。 這是一個可選的替代方案，如同原生應用程式版的 Web 應用程式一般去提供相似或等同的功能。

```json
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }, {
    "platform": "itunes",
    "url": "https://itunes.apple.com/app/example-app1/id123456789"
  }]
```

應用程式物件能包含下列的值：

| 成員       | 描述                              |
| ---------- | --------------------------------- |
| `platform` | 可以找到該應用程式的平台。        |
| `url`      | 可以找到該應用程式的網址。        |
| `id`       | 在特定平台上代表該應用程式的 ID。 |

### `scope`

Defines the navigation scope of this web application's application context. This basically restricts what web pages can be viewed while the manifest is applied. If the user navigates the application outside the scope, it returns to being a normal web page.

If the scope is a relative URL, the base URL will be the URL of the manifest.

```json
"scope": "/myapp/"
```

### `short_name`

提供一個人類可讀且較簡短的應用程式名稱，其值將被使用在較不足以去顯示 Web 應用程式全名的空間。

```json
"short_name": "I/O 2017"
```

### `start_url`

指定一個當使用者由裝置上啟動應用程式時所開啟的網址。 若使用相對路徑，則網址將以 manifest 的位置為基準。

```json
"start_url": "./?utm_source=web_app_manifest"
```

### `theme_color`

定義一個應用程式預設的主題顏色。 其值會被作業系統在某些時候運用來顯示應用程式（如： Android 的任務切換器 task switcher 就以主題顏色圍繞著應用程式）。

```json
"theme_color": "aliceblue"
```

## 啟動畫面（Splash screens）

在 Chrome 47 或較新版本，啟動畫面 splash screen 會被使用在當 Web 應用程式由主畫面開啟的時後。 這啟動畫面是依 Web App manifest 的屬性自動產生的，明確來說是由 `name`、`background_color` 、 `icons` 陣列中較接近裝置的 128dpi 的圖示。

## Mime 類型

Manifests 應該被使用 `application/manifest+json` 的 MIME 類型。不過這是可選的。

## 瀏覽器相容性

{{Compat}}
