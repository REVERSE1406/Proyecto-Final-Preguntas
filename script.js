/* ==========================================
   INTERACT2HACK — AVANCE 1
   Preguntas, navegación y prototipo
========================================== */

const DATA = {
  intro:
    'Durante Interact2Hack, el staff necesita coordinar tareas logísticas sin perder de vista quién hace qué ni qué queda pendiente. Proponemos una herramienta web donde los administradores crean tareas con listas de pasos, las asignan a estudiantes y revisan el avance. En un día del evento, cada estudiante entra desde su dispositivo, consulta sus pendientes, marca los pasos realizados, deja observaciones y confirma el trabajo. Al mismo tiempo, el equipo organizador consulta un tablero para detectar retrasos y distribuir la atención. Todavía debemos validar cómo se comparte el progreso, cuándo una tarea se considera terminada y qué ocurre al vencer.',

  questions: [
    {
      id: 'P-01',
      tema: 'Usuarios y perfiles',
      pregunta: 'Si hay dos administradores, ¿uno puede modificar las tareas creadas por el otro?',
      porque: 'Define si los permisos se comparten entre administradores.',
      supuesto: 'Todos los administradores pueden administrar todas las tareas.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-02',
      tema: 'Usuarios y perfiles',
      pregunta:
        'Si un estudiante deja de participar durante el evento, ¿debe conservarse el historial de las tareas que completó?',
      porque: 'Evita perder trazabilidad cuando alguien deja el staff.',
      supuesto: 'Se desactiva la cuenta y se conserva el historial.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-03',
      tema: 'Usuarios y perfiles',
      pregunta:
        'Si se desactiva a un estudiante con tareas pendientes, ¿esas tareas deben quedar sin asignar o reasignarse automáticamente?',
      porque: 'Define cómo evitar tareas abandonadas.',
      supuesto: 'Quedan sin asignar y visibles para reasignación manual.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-04',
      tema: 'Acceso',
      pregunta:
        'Cuando se registra a un estudiante, ¿cómo debe recibir sus datos de acceso: correo, entrega privada u otro medio?',
      porque: 'Permite definir el proceso de incorporación al evento.',
      supuesto: 'Un administrador entrega el acceso de forma privada.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-05',
      tema: 'Acceso',
      pregunta:
        'Si un estudiante olvida su contraseña durante el evento, ¿la recupera por sí mismo o la restablece un administrador?',
      porque: 'Define el flujo para recuperar el acceso sin interrumpir tareas.',
      supuesto: 'El administrador puede restablecer el acceso.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-06',
      tema: 'Tareas y checklist',
      pregunta: '¿Qué datos mínimos debe completar un administrador para publicar una tarea?',
      porque: 'Delimita la información obligatoria del formulario.',
      supuesto: 'Título, descripción, lugar, plazo y al menos un paso.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-07',
      tema: 'Tareas y checklist',
      pregunta: '¿Se permite publicar una tarea que todavía no tiene pasos en su checklist?',
      porque: 'Decide si pueden existir tareas sin instrucciones verificables.',
      supuesto: 'No; se exige al menos un paso para publicarla.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-08',
      tema: 'Tareas y checklist',
      pregunta: 'Cuando un estudiante realiza el checklist, ¿puede completar sus pasos en cualquier orden?',
      porque: 'Determina si el sistema bloquea pasos posteriores.',
      supuesto: 'Los pasos pueden marcarse en cualquier orden.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-09',
      tema: 'Tareas y checklist',
      pregunta: 'Si un estudiante marca un paso por error, ¿puede desmarcarlo antes de confirmar la tarea?',
      porque: 'Define cómo corregir errores sin pedir ayuda.',
      supuesto: 'Sí, hasta que la tarea sea confirmada.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-10',
      tema: 'Tareas y checklist',
      pregunta:
        'Si el administrador modifica un paso que ya estaba marcado, ¿debe conservarse o reiniciarse esa marca?',
      porque: 'Protege la integridad del progreso previo ante cambios.',
      supuesto: 'Se reinicia la marca del paso modificado.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-11',
      tema: 'Tareas y checklist',
      pregunta:
        'Si se retira una tarea que ya tiene actividad, ¿debe archivarse en lugar de eliminarse definitivamente?',
      porque: 'Decide si se conserva el historial para consulta.',
      supuesto: 'Se archiva y no aparece como activa.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-12',
      tema: 'Asignación',
      pregunta:
        'Si una tarea se asigna a dos estudiantes, ¿comparten un único checklist o cada uno debe completar su propia copia?',
      porque: 'Define qué significa colaborar en una tarea.',
      supuesto: 'Los asignados comparten un único checklist.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-13',
      tema: 'Asignación',
      pregunta:
        'Si uno de los responsables completa todos los pasos de una tarea compartida, ¿la tarea queda lista para confirmar por cualquiera de ellos?',
      porque: 'Determina quién puede cerrar tareas compartidas.',
      supuesto: 'Cualquiera de los responsables puede confirmarla.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-14',
      tema: 'Asignación',
      pregunta:
        'Si cambia el responsable de una tarea ya iniciada, ¿el nuevo estudiante debe conservar el avance registrado?',
      porque: 'Evita duplicar trabajo al reasignar tareas.',
      supuesto: 'El progreso existente se conserva.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-15',
      tema: 'Ejecución y estados',
      pregunta: 'Cuando se marca el primer paso, ¿la tarea debe pasar automáticamente de Pendiente a En progreso?',
      porque: 'Define el evento que inicia el ciclo de ejecución.',
      supuesto: 'Sí, el cambio ocurre al marcar el primer paso.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-16',
      tema: 'Ejecución y estados',
      pregunta: 'Cuando se completa el último paso, ¿la tarea se cierra automáticamente o requiere pulsar «Confirmar»?',
      porque: 'Distingue entre marcar pasos y finalizar formalmente.',
      supuesto: 'Hace falta una confirmación explícita.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-17',
      tema: 'Ejecución y estados',
      pregunta:
        'Después de la confirmación del estudiante, ¿el administrador debe aprobar la tarea para considerarla finalizada?',
      porque: 'Decide si existe una etapa adicional de revisión.',
      supuesto: 'No; confirmar la deja finalizada.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-18',
      tema: 'Ejecución y estados',
      pregunta: 'Al confirmar una tarea, ¿es obligatorio adjuntar una fotografía u otra evidencia?',
      porque: 'Define si el cierre depende de aportar archivos.',
      supuesto: 'No es obligatorio adjuntar evidencia.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-19',
      tema: 'Observaciones',
      pregunta: 'Si surge un problema en un paso, ¿la observación debe asociarse a ese paso o a la tarea completa?',
      porque: 'Determina dónde se registran incidencias.',
      supuesto: 'Las observaciones se registran a nivel de tarea.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-20',
      tema: 'Observaciones',
      pregunta: 'Cuando un estudiante escribe una observación, ¿los otros responsables de esa tarea pueden verla?',
      porque: 'Aclara la visibilidad de incidencias en trabajo compartido.',
      supuesto: 'Es visible para responsables y administradores.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-21',
      tema: 'Tablero de cumplimiento',
      pregunta:
        'Al abrir el tablero, ¿qué debe destacarse primero: tareas vencidas, próximas a vencer o avance por estudiante?',
      porque: 'Permite priorizar la información del tablero.',
      supuesto: 'Se destacan vencidas y próximas a vencer.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-22',
      tema: 'Tablero de cumplimiento',
      pregunta: '¿Cuántas horas antes del plazo una tarea debe mostrarse como «Próxima a vencer»?',
      porque: 'Da una definición comprobable a esa etiqueta.',
      supuesto: 'Se marca 24 horas antes de su vencimiento.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-23',
      tema: 'Tablero de cumplimiento',
      pregunta: '¿El porcentaje de cumplimiento debe calcularse por tareas confirmadas o por pasos marcados?',
      porque: 'Evita métricas que el cliente interprete de otra manera.',
      supuesto: 'Se calcula por tareas confirmadas.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-24',
      tema: 'Vencimientos',
      pregunta: 'Si una tarea vence con pasos pendientes, ¿el estudiante todavía puede terminarla después del plazo?',
      porque: 'Define el tratamiento de las tareas atrasadas.',
      supuesto: 'Puede completarse, pero queda señalada como tardía.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-25',
      tema: 'Vencimientos',
      pregunta:
        'Cuando una tarea está próxima a vencer, ¿basta un aviso en el tablero o se necesita un mensaje externo?',
      porque: 'Define el alcance de las alertas.',
      supuesto: 'Solo se muestra un aviso dentro de la web.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-26',
      tema: 'Contexto de uso',
      pregunta: 'Durante el evento, ¿el staff trabajará principalmente desde celulares o desde computadoras?',
      porque: 'Ayuda a priorizar el diseño de pantallas.',
      supuesto: 'El uso principal será desde celulares.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-27',
      tema: 'Contexto de uso',
      pregunta:
        'Si se pierde internet después de marcar un paso, ¿el sistema debe permitir guardar y sincronizar el avance más tarde?',
      porque: 'Decide si se necesita un modo sin conexión.',
      supuesto: 'Se requiere conexión; se avisa si no se guardó.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-28',
      tema: 'Contexto de uso',
      pregunta:
        '¿Cuántas personas esperan que utilicen la herramienta al mismo tiempo en el momento de mayor actividad?',
      porque: 'Ayuda a dimensionar el uso esperado.',
      supuesto: 'Se planifica inicialmente para unas 100 conexiones simultáneas.',
      prioridad: 'Media',
      respuesta: '',
    },
    {
      id: 'P-29',
      tema: 'Marca y diseño',
      pregunta: '¿Existe una identidad visual oficial de Interact2Hack que debamos respetar en la herramienta?',
      porque: 'Define si el diseño debe seguir recursos oficiales.',
      supuesto: 'Se usa una identidad provisional hasta recibir la oficial.',
      prioridad: 'Baja',
      respuesta: '',
    },
    {
      id: 'P-30',
      tema: 'Alcance',
      pregunta: 'Para la primera versión, ¿qué funcionalidades deben quedar explícitamente fuera del producto?',
      porque: 'Evita añadir módulos que el cliente no necesita ahora.',
      supuesto: 'Sin app nativa, correos automáticos, exportaciones ni idiomas adicionales.',
      prioridad: 'Alta',
      respuesta: '',
    },
    {
      id: 'P-31',
      tema: 'Alcance',
      pregunta:
        '¿La herramienta será utilizada solo en esta edición de Interact2Hack o debe servir también para eventos futuros?',
      porque: 'Define si se necesita reutilizar la organización del evento.',
      supuesto: 'La primera versión atenderá una sola edición.',
      prioridad: 'Media',
      respuesta: '',
    },
  ],

  keys: [
    [
      'P-20',
      'Observaciones',
      'Cuando un estudiante escribe una observación, ¿los otros responsables de esa tarea pueden verla?',
    ],
    [
      'P-26',
      'Contexto de uso',
      'Durante el evento, ¿el staff trabajará principalmente desde celulares o desde computadoras?',
    ],
    [
      'P-21',
      'Tablero de cumplimiento',
      'Al abrir el tablero, ¿qué debe destacarse primero: tareas vencidas, próximas a vencer o avance por estudiante?',
      'Fija los límites del producto antes del PRD y evita construir funciones que el cliente no pidió.',
    ],
  ],
};

/* ==========================================
   VARIABLES Y FUNCIONES AUXILIARES
========================================== */

const questions = DATA.questions;
const byId = Object.fromEntries(questions.map((q) => [q.id, q]));
const keyItems = DATA.keys;

let mode = 'cards';
let role = 'admin';
let answers = {};

try {
  answers = JSON.parse(localStorage.getItem('i2h_client_answers_v2') || '{}');
} catch (e) {
  answers = {};
}

const E = (value = '') =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[c],
  );

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* ==========================================
   NAVEGACIÓN ENTRE SECCIONES
========================================== */

function showView(name) {
  $$('.view').forEach((x) => {
    x.classList.toggle('active', x.id === 'view-' + name);
  });

  $$('.nav-btn').forEach((x) => {
    x.classList.toggle('active', x.dataset.view === name);
  });

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  if (name === 'questions') renderQuestions();
  if (name === 'prototype') renderDemo();
}

$$('[data-view]').forEach((b) => {
  b.addEventListener('click', () => showView(b.dataset.view));
});

/* ==========================================
   CONTENIDO Y FILTROS
========================================== */

$('#intro-text').textContent = DATA.intro;

const themes = [...new Set(questions.map((q) => q.tema))];

$('#topicFilter').innerHTML += themes.map((t) => `<option value="${E(t)}">${E(t)}</option>`).join('');

function updateResponseCount() {
  const n = questions.filter((q) => (answers[q.id] || '').trim()).length;

  $('#responseCount').textContent = n + ' / 31';
}

function saveAnswer(id, value) {
  answers[id] = value;

  try {
    localStorage.setItem('i2h_client_answers_v2', JSON.stringify(answers));
  } catch (e) {}

  updateResponseCount();
}

function attachAnswers() {
  document.querySelectorAll('[data-answer]').forEach((el) => {
    el.addEventListener('input', () => {
      saveAnswer(el.dataset.answer, el.value);
    });
  });
}

function getFiltered() {
  const query = $('#search').value.toLowerCase().trim();
  const theme = $('#topicFilter').value;
  const prio = $('#priorityFilter').value;

  return questions.filter(
    (q) =>
      (!theme || q.tema === theme) &&
      (!prio || q.prioridad === prio) &&
      (!query || [q.id, q.tema, q.pregunta, q.porque, q.supuesto].join(' ').toLowerCase().includes(query)),
  );
}

/* ==========================================
   TARJETAS DE PREGUNTAS
========================================== */

function cardMarkup(q) {
  return `
    <article class="q-card">
      <div class="q-head">
        <span class="q-id">${E(q.id)}</span>
        <span class="topic-mini">${E(q.tema)}</span>
        <span class="priority ${E(q.prioridad)}">
          ${E(q.prioridad)}
        </span>
      </div>

      <h4>${E(q.pregunta)}</h4>

      <div class="q-info">
        <label>Por qué importa</label>
        <p>${E(q.porque)}</p>
      </div>

      <div class="q-info assumption">
        <label>Nuestro supuesto</label>
        <p>
          <strong>[SUPUESTO]</strong>
          ${E(q.supuesto)}
        </p>
      </div>

      <label class="client-entry">
        <span>Respuesta del cliente · se llena en la sesión</span>
        <textarea
          data-answer="${E(q.id)}"
          placeholder="En blanco hasta la sesión..."
        >${E(answers[q.id] || '')}</textarea>
      </label>
    </article>
  `;
}

/* ==========================================
   TABLA DE PREGUNTAS
========================================== */

function tableMarkup(items) {
  return `
    <div class="table-wrap">
      <table class="wide-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tema</th>
            <th>Pregunta</th>
            <th>Por qué importa</th>
            <th>Nuestro supuesto</th>
            <th>Prioridad</th>
            <th>Respuesta del cliente</th>
          </tr>
        </thead>

        <tbody>
          ${items
            .map(
              (q) => `
            <tr>
              <td style="font-weight:900;color:#6655da">
                ${E(q.id)}
              </td>
              <td>${E(q.tema)}</td>
              <td>${E(q.pregunta)}</td>
              <td>${E(q.porque)}</td>
              <td>
                <strong>[SUPUESTO]</strong>
                ${E(q.supuesto)}
              </td>
              <td>
                <span class="priority ${E(q.prioridad)}">
                  ${E(q.prioridad)}
                </span>
              </td>
              <td>
                <textarea
                  data-answer="${E(q.id)}"
                  placeholder="Se llena en la sesión"
                >${E(answers[q.id] || '')}</textarea>
              </td>
            </tr>
          `,
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderQuestions() {
  const items = getFiltered();

  $('#resultsCount').textContent = `${items.length} de ${questions.length} preguntas`;

  $('#questionList').innerHTML = items.length
    ? mode === 'cards'
      ? `<div class="q-grid">
              ${items.map(cardMarkup).join('')}
            </div>`
      : tableMarkup(items)
    : `<div class="no-results">
        No hay preguntas que coincidan con esos filtros.
      </div>`;

  attachAnswers();
}

function setQuestionMode(newMode) {
  mode = newMode;

  $('#cardsBtn').classList.toggle('selected', mode === 'cards');

  $('#tableBtn').classList.toggle('selected', mode === 'table');

  renderQuestions();
}

['search', 'topicFilter', 'priorityFilter'].forEach((id) => {
  $('#' + id).addEventListener(id === 'search' ? 'input' : 'change', renderQuestions);
});

/* ==========================================
   TRES PREGUNTAS CLAVE
========================================== */

$('#keyCards').innerHTML = keyItems
  .map(([id, title, why], i) => {
    const q = byId[id];

    return `
      <article class="key-card">
        <div class="key-number">0${i + 1}</div>
        <h3>${E(title)}</h3>
        <p class="question">${E(q.pregunta)}</p>
        <p class="why">
          <strong>Por qué es clave:</strong>
          ${E(why)}
        </p>
        <div class="q-id">
          ${E(id)} · ${E(q.tema)}
        </div>
      </article>
    `;
  })
  .join('');

/* ==========================================
   EXPORTAR PREGUNTAS A CSV
========================================== */

function exportCSV() {
  const headers = [
    'ID',
    'Tema',
    'Pregunta',
    'Por qué importa',
    'Nuestro supuesto',
    'Prioridad',
    'Respuesta del cliente',
  ];

  const rows = questions.map((q) => [
    q.id,
    q.tema,
    q.pregunta,
    q.porque,
    '[SUPUESTO] ' + q.supuesto,
    q.prioridad,
    answers[q.id] || '',
  ]);

  const quote = (x) => '"' + String(x).replace(/"/g, '""') + '"';

  const csv = '\ufeff' + [headers, ...rows].map((row) => row.map(quote).join(';')).join('\r\n');

  const blob = new Blob([csv], {
    type: 'text/csv;charset=utf-8;',
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');

  a.href = url;
  a.download = 'Interact2Hack_preguntas_y_respuestas.csv';

  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(() => URL.revokeObjectURL(url), 500);
}

/* ==========================================
   PROTOTIPO — CHECKLIST DE ESTUDIANTE
========================================== */

let checks = [true, false, false, false];
let confirmed = false;

const steps = [
  'Confirmar la ubicación de la mesa',
  'Organizar las credenciales por orden',
  'Preparar material para participantes',
  'Verificar el punto de entrega',
];

function setRole(which) {
  role = which;

  $('#adminRole').classList.toggle('sel', which === 'admin');

  $('#studentRole').classList.toggle('sel', which === 'student');

  renderDemo();
}

function toggleStep(i) {
  if (confirmed) return;

  checks[i] = !checks[i];

  renderDemo();
}

function confirmTask() {
  if (checks.every(Boolean)) {
    confirmed = true;
    renderDemo();
  }
}

function resetDemo() {
  checks = [true, false, false, false];
  confirmed = false;
  renderDemo();
}

/* ==========================================
   RENDERIZADO DE LA DEMO
========================================== */

function renderDemo() {
  let count = checks.filter(Boolean).length;

  let pct = Math.round((count / steps.length) * 100);

  let status = confirmed ? 'Completada' : count > 0 ? 'En progreso' : 'Pendiente';

  /* VISTA ADMINISTRADOR */
  if (role === 'admin') {
    $('#demoArea').innerHTML = `
      <div class="proto-kicker">
        CONTROL GENERAL · MODO DEMO
      </div>

      <h3>Panel de operaciones</h3>

      <p>
        Visibilidad del equipo y sus tareas
        para el día del evento.
      </p>

      <div class="demo-stats">
        <div class="demo-stat">
          <span class="lbl">TAREAS DE EJEMPLO</span>
          <span class="num">03</span>
        </div>

        <div class="demo-stat">
          <span class="lbl">EN PROGRESO</span>
          <span class="num purple">
            ${confirmed ? '01' : '02'}
          </span>
        </div>

        <div class="demo-stat">
          <span class="lbl">COMPLETADAS</span>
          <span class="num orange">
            ${confirmed ? '01' : '00'}
          </span>
        </div>
      </div>

      <div class="demo-grid">
        <div class="demo-panel">
          <strong>Seguimiento de tareas</strong>
          <div class="sub">
            Asignaciones ilustrativas — datos ficticios
          </div>

          <div class="task-line">
            <div>
              <b>Preparar acreditaciones</b>
              <small>
                Equipo de registro · ${pct}%
                de pasos marcados
              </small>
            </div>

            <span class="task-tag ${confirmed ? 'done' : ''}">
              ${status}
            </span>
          </div>

          <div class="task-line">
            <div>
              <b>Verificar puntos de conexión</b>
              <small>
                Soporte técnico · 40% de pasos
              </small>
            </div>
            <span class="task-tag">En progreso</span>
          </div>

          <div class="task-line">
            <div>
              <b>Colocar señalética del auditorio</b>
              <small>
                Logística · 0% de pasos
              </small>
            </div>
            <span class="task-tag">Pendiente</span>
          </div>
        </div>

        <div class="demo-panel">
          <strong>Preparar acreditaciones</strong>
          <div class="sub">Resumen de progreso</div>

          <div style="font-family:'Space Grotesk';font-size:40px;font-weight:800;color:#6859e6;margin:15px 0 0">
            ${pct}%
          </div>

          <div class="mini-progress">
            <span style="width:${pct}%"></span>
          </div>

          <p class="sub" style="margin:12px 0 22px">
            ${count} de ${steps.length}
            pasos completados
          </p>

          <button
            class="btn primary small"
            onclick="setRole('student')"
          >
            Abrir como estudiante ↗
          </button>
        </div>
      </div>
    `;
  } else {
    /* VISTA ESTUDIANTE */
    $('#demoArea').innerHTML = `
      <div class="proto-kicker">
        MIS TAREAS · MODO DEMO
      </div>

      <h3>Hola, estudiante 👋</h3>

      <p>
        Revisa el checklist de la tarea asignada
        y confirma cuando termines.
      </p>

      <div class="demo-grid">

        <div class="demo-panel">
          <div style="display:flex;justify-content:space-between;gap:10px">
            <div>
              <strong style="font-size:16px">
                Preparar acreditaciones
              </strong>

              <div class="sub">
                Ubicación de registro ·
                Ejemplo de tarea compartida
              </div>
            </div>

            <span class="task-tag ${confirmed ? 'done' : ''}">
              ${status}
            </span>
          </div>

          <div class="mock-checklist">
            ${steps
              .map(
                (s, i) => `
              <label class="mock-check">
                <input
                  type="checkbox"
                  ${checks[i] ? 'checked' : ''}
                  ${confirmed ? 'disabled' : ''}
                  onchange="toggleStep(${i})"
                >
                <span>${E(s)}</span>
              </label>
            `,
              )
              .join('')}
          </div>

          <div class="mini-progress">
            <span style="width:${pct}%"></span>
          </div>

          <div class="mock-bottom">
            <small>
              ${count} de 4 pasos · ${pct}%
            </small>

            <button
              class="btn primary small"
              onclick="confirmTask()"
              ${!checks.every(Boolean) || confirmed ? 'disabled' : ''}
            >
              ${confirmed ? 'Confirmada ✓' : 'Confirmar tarea'}
            </button>
          </div>

          ${
            confirmed
              ? `<div class="mock-done">
                 ✓ Tarea confirmada en esta simulación.
               </div>`
              : ''
          }
        </div>

        <div class="demo-panel">
          <strong>Observaciones</strong>

          <div class="sub">
            Anota incidencias para el equipo
          </div>

          <textarea
            class="mock-obs"
            style="margin-top:15px"
            placeholder="Ejemplo: faltan 10 credenciales..."
          ></textarea>

          <p class="sub" style="margin:12px 0 15px">
            Esta nota es solo visual;
            no se envía a ningún servidor.
          </p>

          <button
            class="btn small"
            onclick="resetDemo()"
          >
            Reiniciar simulación
          </button>
        </div>
      </div>
    `;
  }
}

/* ==========================================
   INICIALIZACIÓN
========================================== */

updateResponseCount();
renderQuestions();
renderDemo();
