/* ============================================================
   أنشطة بايثون التفاعلية
   - الجزء الأول: البيانات (الأنشطة والأسئلة). عدّلي فيه براحتك.
   - الجزء الثاني: الكود اللي بيرسم الأنشطة. مش لازم تلمسيه.
   ============================================================ */


/* ---------- أسماء الدروس ---------- */
const lessonTitles = {
    1: 'الدرس 1: الخوارزميات',
    2: 'الدرس 2: الطباعة والمتغيرات',
    3: 'الدرس 3: التكرار والشروط',
    4: 'الدرس 4: القوائم',
    5: 'الدرس 5: الدوال'
};


/* ---------- الأنشطة ----------
   type: 'order'  → ترتيب خطوات
   type: 'match'  → توصيل
   type: 'fill'   → إكمال كود (المكان الفاضي بيتكتب {1} و{2}...)
*/
const activities = [
    {
        lesson: 1, type: 'order',
        title: 'رتّب خطوات عمل كوب الشاي',
        steps: [
            'سخّن المياه',
            'ضع الشاي في الكوب',
            'اسكب المياه في الكوب',
            'قلّب الكوب'
        ],
        explain: 'الخوارزمية خطوات مرتبة، وتغيير الترتيب يغيّر النتيجة.'
    },
    {
        lesson: 2, type: 'match',
        title: 'وصّل كل رمز بمعناه',
        pairs: [
            ['a / b', 'قسمة عادية (الناتج عشري)'],
            ['a // b', 'خارج القسمة (الجزء الصحيح)'],
            ['a % b', 'باقي القسمة'],
            ['a ** b', 'الأُس (القوة)']
        ],
        explain: 'مثال: `7 // 2 = 3` و `7 % 2 = 1` و `7 ** 2 = 49`.'
    },
    {
        lesson: 3, type: 'fill',
        title: 'أكمل الكود ليطبع الأرقام من 1 إلى 5',
        code: [
            'for i in range(1, {1}):',
            '    print(i)'
        ],
        blanks: { 1: { options: ['5', '6', '7'], answer: '6' } },
        explain: 'الرقم الأخير في `range` لا يدخل في التكرار، فنكتب 6 لنصل إلى 5.'
    },
    {
        lesson: 3, type: 'fill',
        title: 'أكمل الكود: الناجح درجته 50 أو أكثر',
        code: [
            'marks = 70',
            'if marks {1} 50:',
            "    print('Pass')",
            '{2}:',
            "    print('Fail')"
        ],
        blanks: {
            1: { options: ['>=', '==', '<'], answer: '>=' },
            2: { options: ['else', 'elif', 'if'], answer: 'else' }
        },
        explain: '`>=` تعني أكبر من أو تساوي. وبعد الشرط نستخدم `else` من غير شرط لباقي الحالات.'
    },
    {
        lesson: 4, type: 'fill',
        title: 'أكمل الكود ليطبع Mon',
        code: [
            "week = ['Sat', 'Sun', 'Mon']",
            'print(week[{1}])'
        ],
        blanks: { 1: { options: ['1', '2', '3'], answer: '2' } },
        explain: 'الفهرس يبدأ من 0، فرقم `Mon` هو 2.'
    },
    {
        lesson: 4, type: 'fill',
        title: 'أكمل الكود ليضيف الدرجة 80 إلى القائمة',
        code: [
            'marks = []',
            'marks.{1}(80)',
            'print(marks)'
        ],
        blanks: { 1: { options: ['append', 'add', 'push'], answer: 'append' } },
        explain: 'الأمر `append` يضيف عنصراً في آخر القائمة.'
    },
    {
        lesson: 5, type: 'match',
        title: 'وصّل كل كلمة بمعناها',
        pairs: [
            ['def', 'تعريف دالة جديدة'],
            ['return', 'إرجاع نتيجة الدالة'],
            ['double(7)', 'استدعاء الدالة'],
            ['print', 'دالة مدمجة جاهزة في بايثون']
        ],
        explain: 'نعرّف الدالة بـ `def`، ونعيد نتيجتها بـ `return`، ثم نستدعيها باسمها.'
    }
];


/* ---------- بنك الأسئلة ----------
   answer = رقم الإجابة الصح (بيبدأ من 0)
*/
const questions = {
    1: [
        { question: 'الطريقة المرتبة لحل مشكلة خطوة بخطوة تسمى؟', options: ['خوارزمية', 'متغير', 'شاشة', 'فهرس'], answer: 0 },
        { question: 'أي رمز في المخطط الانسيابي يُستخدم للتفرع حسب شرط؟', options: ['البداية / النهاية', 'المعالجة', 'التفرع الشرطي', 'الخط'], answer: 2 },
        { question: 'أي هيكل ينفذ الخطوات واحدة بعد الأخرى بالترتيب؟', options: ['التتابعي', 'التكراري', 'التفرعي', 'لا شيء مما سبق'], answer: 0 },
        { question: 'أي لغة برمجة لا تعمل إلا داخل متصفح الويب؟', options: ['Python', 'JavaScript', 'Scratch', 'لغة الآلة'], answer: 1 },
        { question: 'أي لغة تعتمد على تركيب كتل (Blocks) وتناسب المبتدئين؟', options: ['Scratch', 'Python', 'JavaScript', 'لغة الآلة'], answer: 0 }
    ],
    2: [
        { question: 'أي سطر يعرض الكلمة `Hello` على الشاشة؟', options: ['Hello', "'Hello'", 'print(Hello)', "print('Hello')"], answer: 3 },
        { question: 'إذا كان `x = 4` ثم نفذنا `print(x + 3)`، فما الناتج؟', options: ['43', '7', 'x + 3', 'خطأ'], answer: 1 },
        { question: 'ما ناتج `print(17 % 5)`؟', options: ['3', '2', '3.4', '85'], answer: 1 },
        { question: 'ما ناتج `print(17 // 5)`؟', options: ['3', '2', '3.4', '12'], answer: 0 },
        { question: 'ما ناتج `print(2 ** 5)`؟', options: ['10', '25', '32', '7'], answer: 2 },
        { question: 'ماذا يعني الرمز `=` في بايثون؟', options: ['يساوي', 'يخصص قيمة لمتغير', 'أكبر من', 'يجمع'], answer: 1 }
    ],
    3: [
        { question: 'ما الأرقام التي يعرضها `for i in range(3): print(i)`؟', options: ['1 2 3', '0 1 2', '0 1 2 3', '1 2'], answer: 1 },
        { question: 'ما آخر رقم يصل إليه `range(1, 6)`؟', options: ['5', '6', '1', '7'], answer: 0 },
        { question: 'أي رمز يُستخدم لمقارنة التساوي؟', options: ['=', '==', '!=', '<='], answer: 1 },
        { question: 'إذا كان `x = 60` ونفذنا: `if x >= 60` اطبع `Pass` وإلا اطبع `Fail`. فماذا يُطبع؟', options: ['Pass', 'Fail', '60', 'خطأ'], answer: 0 },
        { question: '`x = 75`. إذا كان `x >= 90` اطبع `A`، وإلا إذا كان `x >= 60` اطبع `B`، وإلا اطبع `C`. فماذا يُطبع؟', options: ['A', 'B', 'C', 'لا شيء'], answer: 1 },
        { question: 'كم مرة يُنفذ `print` في `for i in range(2, 6): print(i)`؟', options: ['3', '4', '5', '6'], answer: 1 }
    ],
    4: [
        { question: 'إذا كان `a = [7, 22, 11]` فما ناتج `print(a[0])`؟', options: ['7', '22', '11', '0'], answer: 0 },
        { question: '`a = [5, 6, 7]` ثم `a.append(8)` ثم `print(a)`. فما الناتج؟', options: ['[5, 6, 7]', '[5, 6, 7, 8]', '[8, 5, 6, 7]', '8'], answer: 1 },
        { question: 'إذا كان `t = [[1, 2], [3, 4]]` فما ناتج `print(t[1][0])`؟', options: ['1', '2', '3', '4'], answer: 2 },
        { question: 'ما فهرس (Index) أول عنصر في القائمة؟', options: ['0', '1', '-1', '2'], answer: 0 }
    ],
    5: [
        { question: '`def f(x): return x + 1` ثم `print(f(4))`. فما الناتج؟', options: ['4', '5', 'x + 1', 'خطأ'], answer: 1 },
        { question: 'ما الكلمة المستخدمة لتعريف دالة في بايثون؟', options: ['return', 'def', 'print', 'for'], answer: 1 },
        { question: 'ما الكلمة التي تُرجع نتيجة الدالة إلى مكان الاستدعاء؟', options: ['def', 'return', 'if', 'else'], answer: 1 },
        { question: '`def area(w, h): return w * h` ثم `print(area(3, 4))`. فما الناتج؟', options: ['7', '12', '34', 'خطأ'], answer: 1 },
        { question: '`print` تعتبر دالة من نوع؟', options: ['مدمجة (Built-in)', 'يعرّفها المستخدم', 'ليست دالة', 'متغير'], answer: 0 }
    ]
};


/* ============================================================
   الجزء الثاني: الكود اللي بيرسم الأنشطة
   ============================================================ */

/* ---------- أدوات صغيرة ---------- */
function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
}

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// خلط يضمن إن الترتيب مش هو الصح من أول مرة
function shuffleDifferent(arr) {
    let a = shuffle(arr);
    let tries = 0;
    while (a.every((x, i) => x === arr[i]) && tries < 20) {
        a = shuffle(arr);
        tries++;
    }
    return a;
}

function hasArabic(text) {
    return /[\u0600-\u06FF]/.test(text);
}

// أي كود بين علامتين ` ` بيتعرض من الشمال لليمين جوه الجملة العربي
function rich(parent, text) {
    text.split('`').forEach((part, i) => {
        if (!part) return;
        if (i % 2 === 1) {
            const c = el('code', 'inline-code', part);
            c.setAttribute('dir', 'ltr');
            parent.append(c);
        } else {
            parent.append(document.createTextNode(part));
        }
    });
}

function setFeedback(box, ok, msg) {
    box.className = 'feedback ' + (ok ? 'ok' : 'bad');
    box.textContent = '';
    rich(box, msg);
}

function clearFeedback(box) {
    box.className = 'feedback';
    box.textContent = '';
}


/* ---------- 1) نشاط الترتيب ---------- */
function buildOrder(act, body, actions, feedback) {
    let items = shuffleDifferent(act.steps);
    const list = el('ol', 'order-list');
    body.append(list);

    function render() {
        list.innerHTML = '';
        items.forEach((text, i) => {
            const li = el('li', 'order-item');
            const span = el('span', 'order-text', text);

            const up = el('button', 'move up', '▲');
            up.type = 'button';
            up.setAttribute('aria-label', 'تحريك لأعلى: ' + text);
            up.disabled = i === 0;
            up.addEventListener('click', () => move(i, -1));

            const down = el('button', 'move down', '▼');
            down.type = 'button';
            down.setAttribute('aria-label', 'تحريك لأسفل: ' + text);
            down.disabled = i === items.length - 1;
            down.addEventListener('click', () => move(i, 1));

            li.append(span, up, down);
            list.append(li);
        });
    }

    function move(i, d) {
        [items[i], items[i + d]] = [items[i + d], items[i]];
        clearFeedback(feedback);
        render();
        // نرجّع التركيز على نفس العنصر عشان اللي بيستخدم الكيبورد
        const moved = list.children[i + d];
        const pref = moved.querySelector(d < 0 ? '.up' : '.down');
        const other = moved.querySelector(d < 0 ? '.down' : '.up');
        (pref.disabled ? other : pref).focus();
    }

    const check = el('button', 'act-btn', 'تحقق');
    check.type = 'button';
    check.addEventListener('click', () => {
        let right = 0;
        items.forEach((t, i) => {
            const ok = t === act.steps[i];
            list.children[i].classList.toggle('ok', ok);
            list.children[i].classList.toggle('bad', !ok);
            if (ok) right++;
        });
        const all = right === items.length;
        setFeedback(feedback, all,
            (all ? 'أحسنت! الترتيب صحيح. ' : right + ' من ' + items.length + ' في مكانها الصحيح. ') + (act.explain || ''));
    });

    const reset = el('button', 'act-btn light', 'أعد الخلط');
    reset.type = 'button';
    reset.addEventListener('click', () => {
        items = shuffleDifferent(act.steps);
        clearFeedback(feedback);
        render();
    });

    actions.append(check, reset);
    render();
}


/* ---------- 2) نشاط التوصيل ---------- */
function buildMatch(act, body, actions, feedback) {
    const meanings = shuffle(act.pairs.map(p => p[1]));
    const selects = [];

    act.pairs.forEach((pair, idx) => {
        const row = el('div', 'match-row');
        row.append(el('span', 'match-key', pair[0]));

        const sel = el('select');
        sel.setAttribute('aria-label', 'معنى ' + pair[0]);
        sel.append(new Option('اختر المعنى...', ''));
        meanings.forEach(m => sel.append(new Option(m, m)));
        selects.push(sel);

        row.append(sel);
        body.append(row);
    });

    const check = el('button', 'act-btn', 'تحقق');
    check.type = 'button';
    check.addEventListener('click', () => {
        if (selects.some(s => !s.value)) {
            setFeedback(feedback, false, 'اختر معنى لكل رمز أولاً.');
            return;
        }
        let right = 0;
        selects.forEach((s, i) => {
            const ok = s.value === act.pairs[i][1];
            s.classList.toggle('ok', ok);
            s.classList.toggle('bad', !ok);
            if (ok) right++;
        });
        const all = right === selects.length;
        setFeedback(feedback, all,
            (all ? 'أحسنت! كل التوصيلات صحيحة. ' : right + ' من ' + selects.length + ' صحيحة. ') + (act.explain || ''));
    });

    const reset = el('button', 'act-btn light', 'إعادة المحاولة');
    reset.type = 'button';
    reset.addEventListener('click', () => {
        selects.forEach(s => {
            s.value = '';
            s.classList.remove('ok', 'bad');
        });
        clearFeedback(feedback);
    });

    actions.append(check, reset);
}


/* ---------- 3) نشاط إكمال الكود ---------- */
function buildFill(act, body, actions, feedback) {
    const box = el('div', 'code-box');
    body.append(box);
    const selects = {};

    act.code.forEach(line => {
        const row = el('div', 'code-line');
        // نقسم السطر عند كل {رقم} ونحط مكانه قائمة اختيارات
        line.split(/(\{\d+\})/).forEach(part => {
            const m = part.match(/^\{(\d+)\}$/);
            if (m) {
                const id = m[1];
                const sel = el('select');
                sel.setAttribute('aria-label', 'الفراغ رقم ' + id);
                sel.append(new Option('؟', ''));
                act.blanks[id].options.forEach(o => sel.append(new Option(o, o)));
                selects[id] = sel;
                row.append(sel);
            } else if (part) {
                row.append(document.createTextNode(part));
            }
        });
        box.append(row);
    });

    const check = el('button', 'act-btn', 'تحقق');
    check.type = 'button';
    check.addEventListener('click', () => {
        const ids = Object.keys(selects);
        if (ids.some(id => !selects[id].value)) {
            setFeedback(feedback, false, 'اختر إجابة لكل فراغ أولاً.');
            return;
        }
        let right = 0;
        ids.forEach(id => {
            const ok = selects[id].value === act.blanks[id].answer;
            selects[id].classList.toggle('ok', ok);
            selects[id].classList.toggle('bad', !ok);
            if (ok) right++;
        });
        const all = right === ids.length;
        setFeedback(feedback, all,
            (all ? 'أحسنت! الكود صحيح. ' : right + ' من ' + ids.length + ' صحيحة. ') + (act.explain || ''));
    });

    const reset = el('button', 'act-btn light', 'إعادة المحاولة');
    reset.type = 'button';
    reset.addEventListener('click', () => {
        Object.values(selects).forEach(s => {
            s.value = '';
            s.classList.remove('ok', 'bad');
        });
        clearFeedback(feedback);
    });

    actions.append(check, reset);
}


/* ---------- 4) الكويز (سؤال واحد في كل مرة) ---------- */
function buildQuiz(list, container) {
    let index = 0;
    let score = 0;
    const area = el('div', 'quiz');
    container.append(area);

    function show() {
        area.innerHTML = '';

        // شاشة النتيجة
        if (index >= list.length) {
            const result = el('div', 'quiz-result');
            result.append(el('div', 'quiz-score', score + ' / ' + list.length));
            const ratio = score / list.length;
            const msg = ratio === 1 ? 'ممتاز! أجبت على كل الأسئلة صح.'
                : ratio >= 0.6 ? 'أحسنت! راجع الأسئلة اللي غلطت فيها.'
                : 'حاول مرة تانية بعد مراجعة الدرس.';
            result.append(el('p', '', msg));
            const again = el('button', 'act-btn', 'أعد الاختبار');
            again.type = 'button';
            again.addEventListener('click', () => { index = 0; score = 0; show(); });
            result.append(again);
            area.append(result);
            return;
        }

        const q = list[index];
        area.append(el('div', 'quiz-progress', 'سؤال ' + (index + 1) + ' من ' + list.length));
        const qText = el('p', 'quiz-question');
        rich(qText, q.question);
        area.append(qText);

        const opts = el('div', 'quiz-options');
        const feedback = el('div', 'feedback');
        feedback.setAttribute('aria-live', 'polite');
        const next = el('button', 'act-btn', index === list.length - 1 ? 'اعرض النتيجة' : 'السؤال التالي');
        next.type = 'button';
        next.hidden = true;
        next.addEventListener('click', () => { index++; show(); });

        const buttons = q.options.map((text, i) => {
            const b = el('button', 'quiz-option', text);
            b.type = 'button';
            // الأكواد والكلام الإنجليزي بتتكتب من الشمال لليمين
            if (!hasArabic(text)) b.setAttribute('dir', 'ltr');
            b.addEventListener('click', () => {
                buttons.forEach(x => { x.disabled = true; });
                const ok = i === q.answer;
                if (ok) score++;
                b.classList.add(ok ? 'ok' : 'bad');
                buttons[q.answer].classList.add('ok');
                setFeedback(feedback, ok, ok ? 'إجابة صحيحة!' : 'الإجابة الصحيحة: ' + (hasArabic(q.options[q.answer]) ? q.options[q.answer] : '`' + q.options[q.answer] + '`'));
                next.hidden = false;
                next.focus();
            });
            opts.append(b);
            return b;
        });

        area.append(opts, feedback, el('div', 'act-actions'));
        area.lastChild.append(next);
    }

    show();
}


/* ---------- تجميع كل حاجة في الصفحة ---------- */
const kindNames = { order: 'نشاط ترتيب', match: 'نشاط توصيل', fill: 'نشاط إكمال كود' };
const builders = { order: buildOrder, match: buildMatch, fill: buildFill };

function init() {
    Object.keys(lessonTitles).forEach(n => {
        const pane = document.getElementById('lesson-' + n);
        if (!pane) return;

        pane.append(el('h2', 'lesson-heading', lessonTitles[n]));

        // الأنشطة الخاصة بالدرس
        activities.filter(a => a.lesson === Number(n)).forEach(act => {
            const card = el('section', 'act-card');
            card.append(el('span', 'act-kind', kindNames[act.type]));
            card.append(el('h4', '', act.title));

            const body = el('div', 'act-body');
            const actions = el('div', 'act-actions');
            const feedback = el('div', 'feedback');
            feedback.setAttribute('aria-live', 'polite');

            card.append(body, actions, feedback);
            builders[act.type](act, body, actions, feedback);
            pane.append(card);
        });

        // كويز الدرس
        if (questions[n]) {
            const quizCard = el('section', 'act-card');
            quizCard.append(el('span', 'act-kind', 'اختبر نفسك'));
            buildQuiz(questions[n], quizCard);
            pane.append(quizCard);
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
