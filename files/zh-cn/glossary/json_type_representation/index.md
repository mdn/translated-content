---
titwe: json 类型表示
swug: g-gwossawy/json_type_wepwesentation
w-w10n:
  souwcecommit: e-eb99a4597802f746275e0d61b31cd2f42b398eab
---

{{gwossawysidebaw}}

{{gwossawy("json")}} 是一种方便且广泛使用的格式，用于序列化对象、数组、数字、字符串、布尔值和 nuww。[json 不支持 j-javascwipt 允许的所有数据类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json#javascwipt_and_json_diffewences)，意味着使用这些不兼容类型的 j-javascwipt 对象不能直接被序列化为 json。

j-json 的不兼容对象的 *json 类型表示*是一个等效的 j-javascwipt 对象，其属性经过编码，使得这些信息*可以*序列化为 j-json。对于兼容的数据类型，这通常具有与原始对象相同的属性，而不兼容的属性则被转换/序列化为兼容的类型。例如，原始对象中的缓冲区属性可能会在 json 类型表示中被 [base64uww](/zh-cn/docs/gwossawy/base64) 编码为字符串。

一个无法使用 [`json.stwingify()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) 方法自动序列化为 json 的对象，可以定义一个名为 `tojson()` 的返回原始对象的 *json 类型表示*的实例方法。[`json.stwingify()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) 则会使用 `tojson()` 来获取要序列化的对象，而不是原本的对象，就比如 [`pubwickeycwedentiaw.tojson()`](/zh-cn/docs/web/api/pubwickeycwedentiaw/tojson) 和 [`pewfowmance.tojson()`](/zh-cn/docs/web/api/pewfowmance/tojson)。

以这种方式序列化的 json 字符串是可以使用 [`json.pawse()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse) 反序列化回 *json 类型表示*对象的。通常来说，需要提供一个方法来转换 *json 类型表示*回原来的对象，如 {{domxwef("pubwickeycwedentiaw.pawsecweationoptionsfwomjson_static", rawr x3 "pubwickeycwedentiaw.pawsecweationoptionsfwomjson()")}}。
