import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  div.appendChild(p);
  p.innerText = text;

  // 戻すボタン生成
  const returnButton = document.createElement("button");
  returnButton.innertext = "戻す";

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    // 完了ボタンがクリックされると完了リストへ移動し、削除する

    // 完了したタスク
    const completeList = completeButton.closest("li");
    deleteFromIncompleteList(completeList);

    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    // div.innerText = taskContent;
    // console.log(div);
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      // 戻すボタンを押して一度消す
      const deleteList = returnButton.closest("li");
      console.log(deleteList);
      deleteList.remove();

      // テキスト取得

      const text = deleteList.children[0].children[0].innerHTML;
      console.log(text);
      createIncompleteList(text);
    });

    div.appendChild(completeList.children[0].children[0]);
    div.appendChild(returnButton);

    li.appendChild(div);
    document.getElementById("complete_list").appendChild(li);
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンがクリックされると親ノードを未完了リストから削除する
    const deleteList = deleteButton.closest("li");

    deleteFromIncompleteList(deleteList);
  });

  // liタグの子要素に各タグを設定
  li.appendChild(div);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete_list").appendChild(li);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
