import { useLayoutEffect } from "react"

export function CardContainer({ finalList, state }) {
  let { itemList, dimension, cardStateCount = 5, colors } = state
  let list = finalList.slice(0, dimension * dimension)
  useLayoutEffect(() => {
    document.querySelectorAll('.card').forEach(card => {
      card.dataset.state = '0'
      card.style.opacity = 1
      if (card._annotation) card._annotation.remove()

    })
  })
  return <div
    className="cards-container flex-wrap flex absolute inset-2 items-center justify-center gap-2"
  >
    <div
      className="w-[90%] h-[70%] grid gap-2"
      style={{
        gridTemplate: `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`,
      }}
      onClick={e => {
        let card = e.target.closest('.card')
        if (!card || !RoughNotation) return

        let state = (parseInt(card.dataset.state) + 1) % cardStateCount
        card.dataset.state = state
        if (card._annotation) card._annotation.remove()
        let annotation = RoughNotation.annotate(card.querySelector('.for-highlight'), { padding: 0, type: 'highlight', color: colors[state], animationDuration: 200 });
        annotation.show()
        card._annotation = annotation

      }}
    >

      {list.map(
        (item, index) => (
          // <Card key={index} index={index}>
          //   {item}
          // </Card>
          <div
            key={index}
            data-flip-id={`${item}`}
            data-state='0'
            className="card p-1 rounded-md  "
          >
            <div className="for-highlight absolute inset-1"></div>

            <span className='z-10 inline-block text-xl'>{item}</span>
          </div>
        )
      )}
    </div>

    <div
      onClick={(e) => {
        if (e.target.classList.contains('on')) {
          e.target.classList.remove('on')
        }
      }}
      className='z-10 glass absolute inset-0'></div>
  </div>
}
