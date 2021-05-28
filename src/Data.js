const Wrap = ({ children }) => <>{children}</>;

export const data = {
  games: [
    {
      day: 1,
      date: "1/1",
      games: [
        {
          title: "League of Legends",
          imgDir: "img/lol.gif",
          url:"lol",
          gameRule:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
      ],
    },
    {
      day: 2,
      date: "1/1",
      games: [
        {
          title: "Title",
          imgDir: "img/lol.gif",
          url:"test"
        },
      ],
    },
  ],
  content: [
    {
      title: "Test Data",
      content: (
        <Wrap>
          <p style={{fontSize:"30px", zIndex:"1", textAlign:"center"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Wrap>
      ),
    },
    {
        title: "prize",
        content: (
          <Wrap>
            <p style={{fontSize:"30px", zIndex:"1", textAlign:"center"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </Wrap>
        ),
      },
  ],
};

export default data;
