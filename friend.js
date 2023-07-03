app.component(`MyFriend`, {
    template: `
    <div>
    <p>Tên: {{ friend.name }}</p>
    <p>Tuổi: {{ friend.age }}</p>
    <p>Số điện thoại: {{ friend.telNumber }}</p>
    <p>Giới tính: {{ friend.sex }}</p>
    <p>Trình độ tiếng Nhật: {{ friend.japaneseLevel }}</p>
    </div>
    `,
    props: [`friend`],
  });
  