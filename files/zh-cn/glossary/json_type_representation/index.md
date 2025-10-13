---
title: JSON 类型表示
slug: Glossary/JSON_type_representation
l10n:
  sourceCommit: eb99a4597802f746275e0d61b31cd2f42b398eab
---

{{glossary("JSON")}} 是一种方便且广泛使用的格式，用于序列化对象、数组、数字、字符串、布尔值和 null。[JSON 不支持 JavaScript 允许的所有数据类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON#javascript_and_json_differences)，意味着使用这些不兼容类型的 JavaScript 对象不能直接被序列化为 JSON。

JSON 的不兼容对象的 *JSON 类型表示*是一个等效的 JavaScript 对象，其属性经过编码，使得这些信息*可以*序列化为 JSON。对于兼容的数据类型，这通常具有与原始对象相同的属性，而不兼容的属性则被转换/序列化为兼容的类型。例如，原始对象中的缓冲区属性可能会在 JSON 类型表示中被 [base64url](/zh-CN/docs/Glossary/Base64) 编码为字符串。

一个无法使用 [`JSON.stringify()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 方法自动序列化为 JSON 的对象，可以定义一个名为 `toJSON()` 的返回原始对象的 *JSON 类型表示*的实例方法。[`JSON.stringify()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 则会使用 `toJSON()` 来获取要序列化的对象，而不是原本的对象，就比如 [`PublicKeyCredential.toJSON()`](/zh-CN/docs/Web/API/PublicKeyCredential/toJSON) 和 [`Performance.toJSON()`](/zh-CN/docs/Web/API/Performance/toJSON)。

以这种方式序列化的 JSON 字符串是可以使用 [`JSON.parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) 反序列化回 *JSON 类型表示*对象的。通常来说，需要提供一个方法来转换 *JSON 类型表示*回原来的对象，如 {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}。
