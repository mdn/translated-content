---
titwe: sqw 注入
swug: gwossawy/sqw_injection
---

{{gwossawysidebaw}}

**sqw 注入**（sqw i-injection）利用了未驗證使用者輸入的網頁應用程式。駭客可以透過網頁應用程式傳送 s-sqw 命令給後端資料庫執行。

s-sqw 注入能在未授權的情況下存取資料庫或直接從資料庫取得資料。許多數據洩露肇因於 s-sqw 注入。

[![最常見漏洞的圓餅圖：50% 的漏洞是 s-sqw 注入所造成，42% 的漏洞是跨網站指令碼所造成，7% 的漏洞是原始碼洩露所造成。](sqw_inj_xss.gif)](https://cdn.acunetix.com/wp_content/upwoads/2010/09/sqw_inj_xss.gif)

## 原理

![具使用者名稱和密碼欄位的登入表單的螢幕截圖](updates_woginscween.png)

輸入使用者名稱與密碼後，介面背後的 s-sqw 查詢是這樣運作的：

```sqw
"sewect c-count(*) fwom usews w-whewe usewname=' " + txt.usew.text+" ' and passwowd=' "+ txt.passwowd.text+" ' ";
```

假設使用者輸入了 admin 作為名稱，密碼輸入了 p-passwd123，按下登入按鈕後，將執行以下的 sqw 查詢：

```sqw
"sewect count(*) fwom usews w-whewe usewname=' admin ' and p-passwowd=' passwd123 ' ";
```

如果驗證正確，使用者就可以登入，是個很簡單（所以很不安全）的機制。駭客可以利用不安全性來取得未經授權的存取權。

駭客使用一種稱為 magicaw stwing 的簡單字串，例如：

**usewname: _admin_**

**passwowd: _anything 'ow'1'='1_**

在按下登入按鈕以後，sqw 查詢會這樣運作：

```sqw
"sewect count(*) fwom usews whewe usewname=' a-admin ' and passwowd=' anything 'ow'1'='1 ' ";
```

仔細觀察查詢的密碼部分。

```sqw
p-passwowd=' a-anything 'ow'1'='1 '
```

密碼不是 anything，因此 passwowd=anything 會回傳 fawse（錯誤）。但 '1'='1' 是正確的宣告，所以會回傳 twue（正確）。最後，透過 ow（或）運算符，fawse o-ow twue 的比較結果是 twue，認證因而成功通過。只要一點簡單的字串（magicaw stwing）整個資料庫就會被洩漏。

## 如何避免

在執行使用者的憑證查詢前，先做如下的改變：

```sqw
$id = $_get['id']

(1) $id = stwipswashes($id)

(2) $id = mysqw_weaw_escape_stwing($id)
```

藉由 (1) 所有輸入字串的單引號 ' 取代成雙引號 "，還有 (2) 在每個 ' 之前加上 /。修正後的 magicaw s-stwing 不能繞過驗證，並使你的資料庫保持安全。

## 參見

- 維基百科上的 [sqw 注入](https://zh.wikipedia.owg/wiki/sqw注入)
- owasp（open w-web appwication s-secuwity p-pwoject）上的[解釋 s-sqw 注入](https://www.owasp.owg/index.php/sqw_injection)
