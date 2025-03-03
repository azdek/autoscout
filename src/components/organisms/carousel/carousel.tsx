const dataList = [
  {
    text: 'Спасибо за Hyundai Sonata! Всё честно, на связи 24/7. Машина в идеале!',
    author: 'Айбек, Бишкек',
  },
  {
    text: 'Получили машину, Kia Sportage. Доставили быстро, все отлично! Огромное спасибо Ильгизу, autoscout_kg. Отличные парни!',
    author: 'Жениш, Бишкек.',
  },
  {
    text: 'Стала обладательницей Kia Morning. Очень рада, что обратилась в @autoscout_kg! Безумно благодарна Ильгизу за оперативную доставку и отличную работу!',
    author: 'Виктория, Бишкек',
  },
  {
    text: 'Выгодно приобрела автомобиль Kia Stonic на аукционе, не ожидала что так быстро приедет! Спасибо Ильгизу и всей вашей команде!',
    author: 'Назира, Бишкек',
  },
]

const Carousel = () => {
  return (
    <div className="relative w-full flex gap-4 overflow-x-auto">
      {dataList.map((item, idx) => (
        <div
          className="flex flex-col gap-2 max-w-md min-w-[280px] w-full bg-[#bfdbfe] p-5 rounded-md shadow-md"
          data-carousel-item={idx}
          key={idx}
        >
          <h4 className="text-md font-bold">«{item.text}»</h4>
          <p className="text-md">– {item.author}</p>
        </div>
      ))}
    </div>
  )
}
export default Carousel
