## Первая задача
Функция getObjectProperty, которая должна возвращать свойство объекта по указанному пути. На реализацию данной функции ушло около часа или полтора часа. 
### Сложности в процессе
Достаточное количество времени не мог понять как мне вернуть `undefined` в случае, если свойств в объекте не существует.
## Вторая задача
Необходимо было реализовать приложение с взаиможействием с API. Подобные приложении уже приходилось делать, и я оценивал работу в 3-4 дня. Работу в общей сложности выполнил за 4 дня.

### Подзадачи
- Экран авторизации
- Экран подтверждения одноразового пароля
- Экран категорий и просмотра карточек
- Просмотр карточки Покемона
##### Экран авторизации
Я сверстал форму и добавил необходимый функционал для эмитации входа в свой аккаунт. Данные находились уже на стороне клиента и я просто проверял их после нажатия кнопки входа. 
##### Экран подтверждения одноразового пароля
Данный экран представлял собой форму с полем ввода одноразового пароля, который был реализован с помощью метода объекта на клиенте. Пароль выводится в консоль, так как это эмитация One Time Password.
##### Экран категорий и просмотра карточек
На этом экране нужно было отобразить карточки покемонов. Для этого state я указал начальные значения для обращения к api. Было указано: тип покемона, подтип покемона, размер страницы и количество карточек покемонов. При изменении типа или подтипа происходит запрос к api и изменение карточек соответсвенно.
##### Просмотр карточки Покемона
При клике на карточку открывается данный экран, в котором отображается детальная информация карточки покемноа, на которого было произведено нажатие. Данные получались с api параметром которого был id покемона.

### Задачи со звёздочкой
- Пагинация карточек
    + Была реализвана пагинация карточек, в котором страницы выдаются порциями и при клике на соответсвующую кнопку показывается соответствующая порция страниц при клике на которую отображаются новые карточки.
- Анимации интерфейса
    + В приложении присутствует минимальная анимация, которая не доставляет неудобства пользователю при взаимодействии с приложением.
- Сохранение сессии в localStorage
    + При удачном входе фиксируется то, что пользователь авторизован и в случае закрытия вкладки фиксация останется;  
- Адаптивный дизайн
    + Сайт адаптивен под любые устройства, начиная от компьютеров заканчивая смартфонами.

### Сложности в процессе
Когда я узнал, что желательно использовать хуки я протратил время на документацию, чтобы тчательное изучить хуки, так как до этого опыта с ними практически не имел.
