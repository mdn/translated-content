---
title: SQL 注入
slug: Glossary/SQL_Injection
---

{{GlossarySidebar}}

**SQL 注入**（SQL injection）利用了未驗證使用者輸入的網頁應用程式。駭客可以透過網頁應用程式傳送 SQL 命令給後端資料庫執行。

SQL 注入能在未授權的情況下存取資料庫或直接從資料庫取得資料。許多數據洩露肇因於 SQL 注入。

[![最常見漏洞的圓餅圖：50% 的漏洞是 SQL 注入所造成，42% 的漏洞是跨網站指令碼所造成，7% 的漏洞是原始碼洩露所造成。](sql_inj_xss.gif)](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## 原理

![具使用者名稱和密碼欄位的登入表單的螢幕截圖](updates_loginscreen.png)

輸入使用者名稱與密碼後，介面背後的 SQL 查詢是這樣運作的：

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

假設使用者輸入了 admin 作為名稱，密碼輸入了 passwd123，按下登入按鈕後，將執行以下的 SQL 查詢：

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

如果驗證正確，使用者就可以登入，是個很簡單（所以很不安全）的機制。駭客可以利用不安全性來取得未經授權的存取權。

駭客使用一種稱為 Magical String 的簡單字串，例如：

**Username: _admin_**

**Password: _anything 'or'1'='1_**

在按下登入按鈕以後，SQL 查詢會這樣運作：

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

仔細觀察查詢的密碼部分。

```sql
Password=' anything 'or'1'='1 '
```

密碼不是 anything，因此 password=anything 會回傳 FALSE（錯誤）。但 '1'='1' 是正確的宣告，所以會回傳 TRUE（正確）。最後，透過 OR（或）運算符，FALSE OR TRUE 的比較結果是 TRUE，認證因而成功通過。只要一點簡單的字串（Magical String）整個資料庫就會被洩漏。

## 如何避免

在執行使用者的憑證查詢前，先做如下的改變：

```sql
$id = $_GET['id']

(1) $id = Stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

藉由 (1) 所有輸入字串的單引號 ' 取代成雙引號 "，還有 (2) 在每個 ' 之前加上 /。修正後的 Magical String 不能繞過驗證，並使你的資料庫保持安全。

## 參見

- 維基百科上的 [SQL 注入](https://zh.wikipedia.org/wiki/SQL注入)
- OWASP（Open Web Application Security Project）上的[解釋 SQL 注入](https://www.owasp.org/index.php/SQL_Injection)
