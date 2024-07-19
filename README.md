# Форма регистрации с валидацией всех полей

<img src="./assets/images/form1.png" alt="form1" />
<img src="./assets/images/form2.png" alt="form2" />

Создана страница с формой для регистрации пользователя, содержащая следующие поля:

Поле ввода имени: обязательное поле, должно содержать только буквы и пробелы. Длина имени должна быть от 2 до 20 символов. Имеет атрибуты placeholder и required.
Поле ввода электронной почты: обязательное поле, должно быть в формате email (содержать символ '@' и доменное имя). Имеет атрибуты placeholder и required.
Поле ввода возраста: обязательное поле. Имеет атрибуты placeholder и required.
Поле выбора пола: представленное в виде radio buttons для выбора между мужчиной и женщиной
Поле выбора профессии: обязательное поле, представленное в виде выпадающего списка (select). Имеет атрибуты required и placeholder для выбора профессии. Варианты профессий: Врач, Программист, Учитель, Дизайнер, Инженер, Продавец, Другое.
Поле ввода пароля: обязательное поле, должно быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру. Имеет атрибуты placeholder, required, minlength и pattern.
Поле checkbox, показывающее согласие пользователя с обработкой данных. Имеет атрибут required.
Кнопка отправки формы.

Используя JavaScript, добавлен обработчик события отправки формы (submit), который выполняет следующие действия:

- отменяет действие по умолчанию для события submit;
- отображает сообщение об ошибке рядом с каждым полем при обнаружении ошибки валидации;
- кнопка отправки неактивна (disabled), пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями;
- если форма проходит проверку валидности, вывод в консоль значения полей формы и очистка формы.

Реализованы дополнительные обработчики событий focus и blur для каждого поля.

# Технологии

<div align="center">  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a> 
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>   
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
<a href="https://code.visualstudio.com/" target="_blank"><img style="margin: 10px" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg" alt="VS Code" height="50" /></a>
