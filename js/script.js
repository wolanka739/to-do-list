{
    const tasks = [
        {
            content: "zrobić zakupy",
            done: true,
        },
        {
            content: "posprzątać w domu",
            done: false,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
              <li
                class="tasks__item js-task"
              >
                <button class="tasks__button tasks__button--toggleDone js-toggleDone">
                  ${task.done ? "✔" : ""}
                </button>
                <span class="tasks__content${ task.done ? " task__content--done" : ""}">
                  ${task.content}
                </span>
                <button class="tasks__button tasks__button--remove js-remove">
                  🗑
                </button>
              </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}