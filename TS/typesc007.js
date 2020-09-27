"use strict";
set;
name(value, string);
{
    // 空だった場合にはエラーにする
    if (value === '') {
        console.log('書籍名が指定されていません');
    }
    else {
        this._name = value;
    }
}
