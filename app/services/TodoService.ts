import { Todo } from "../models/Todo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getTodos = async () => {
    const url = API_URL + "/api/todo/get"; // APIからTODOデータを取得するエンドポイント
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos) return;
    const url = API_URL + "/api/todo/add"; // APIにTODOデータを送信して保存するエンドポイント
    const data = JSON.stringify(todos);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        });
        if (response.ok) {
            // データを正常に保存した場合の処理（任意）
        } else {
            console.error('Failed to save TODO data to the API');
        }
    } catch (error) {
        console.error(error);
    }
}
