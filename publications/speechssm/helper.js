function createAudioHTML(path) {
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}
const numPerPage = 4;

function generateContinuationTable(tableId, filenames, page) {
  let table = document.getElementById(tableId);

  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  let prefix = 'audio_samples/speech/';
  for (let i = (page - 1) * numPerPage; i < page * numPerPage; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    let cell = row.insertCell(0);
    cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_original.wav');

    cell = row.insertCell(1);
    cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_prompt.wav');

    cell = row.insertCell(2);
    content = '';
    for (let j = 0; j < 4; j++) {
      content += createAudioHTML(
          prefix + filenames[i] + '_continuation_12rvq_' + j + '.wav');
    }
    cell.innerHTML = content;
  }
}

function generateAcousticGenerationTable(tableId, filenames, page) {
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  let prefix = 'audio_samples/speech/';
  for (let i = (page - 1) * numPerPage; i < page * numPerPage; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    let cell = row.insertCell(0);
    cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_original.wav');

    cell = row.insertCell(1);
    content = '';
    for (let j = 0; j < 3; j++) {
      content += createAudioHTML(
          prefix + filenames[i] + '_generation_mlm_12rvq_' + j + '.wav');
    }
    cell.innerHTML = content;
  }
}

function generateSoundStreamTable(tableId, filenames, page) {
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  let prefix = 'audio_samples/speech/';
  for (let i = (page - 1) * numPerPage; i < page * numPerPage; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    let cell = row.insertCell(0);
    cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_original.wav');

    cell = row.insertCell(1);
    cell.innerHTML =
        createAudioHTML(prefix + filenames[i] + '_reconstruction_3rvq.wav');

    cell = row.insertCell(2);
    cell.innerHTML =
        createAudioHTML(prefix + filenames[i] + '_reconstruction_12rvq.wav');
  }
}

function generateSimpleTable(tableId, filenames, prefix) {
  let table = document.getElementById(tableId);

  let content = '';
  for (let i = 0; i < filenames.length; i++) {
    content += createAudioHTML(prefix + filenames[i] + '.wav');
  }

  let row = table.insertRow(1);
  let cell = row.insertCell(0);
  cell.innerHTML = content;
}

function generatePianoTable(tableId, filenames) {
  let table = document.getElementById(tableId);
  let prefix = 'audio_samples/piano/';
  for (let i = 0; i < filenames.length; i++) {
    let row = table.insertRow(i + 1);
    let cell = row.insertCell(0);
    cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_original.wav');

    cell = row.insertCell(1);
    cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_prompt.wav');

    cell = row.insertCell(2);
    cell.innerHTML =
        createAudioHTML(prefix + filenames[i] + '_cont_acoustic_only.wav');

    cell = row.insertCell(3);
    cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_cont.wav');
  }
}

const librispeechTestCleanContinuationFilenames = [
  '1f385851-dc66-4da8-ac1b-8f5173f68649',
  '72acf312-63e0-443c-ac05-abe1e74e8367',
  'f3ae9437-ab9b-4444-ad12-4ea2d29fc6f8',
  'ff338b2c-c140-4e3a-ba31-87d2093cf70c',
  'e7594c11-e34e-4db6-a853-6f0ddc356f08',
  '7e4cf66b-7da9-4261-954b-17004f4684e6',
  '103583eb-3eb9-488b-a591-3ffac262c810',
  '75389290-9ec1-45f9-b7f8-942637e5e644',
  '497b5be1-e5f7-49dd-b244-67df3817d25b',
  '81aff5f4-88b7-49b5-96d9-d5ec85ce64ea',
  'd3b1f250-2e55-4f6c-be0d-7d7fc9428464',
  '4093adea-d36c-42b8-a165-14cc5fceb461',
  'e41a4d2f-d790-483e-8b80-10525e180675',
  '76da8572-9381-4b8e-bf33-14b82ac32de8',
  '75adcb3a-7e6f-47b6-aa7b-c528fcfb7fe8',
  '3242966b-4c6a-49a2-8687-efd36546c8ba',
  '2eb8ed00-8994-49f5-aa86-5b0450283dd6',
  '23f51675-43da-4bc4-8f31-db866152b080',
  'bb632b5f-6c31-4966-a24d-dc112ba79873',
  'e3223207-381f-45de-bf30-63cee54316f2',
];

const librispeechTestOtherContinuationFilenames = [
  'b70a5670-b091-458e-9909-1c2e5cc4b804',
  'ffe14b64-bfeb-4ad7-9900-bbc7355f4b39',
  '1fa24317-ab52-44f4-926c-cb0571269265',
  'ed2dc23b-868a-470f-a843-b22091152ea2',
  '46c3472e-72fa-49f4-b7d3-3cb73a7a5541',
  '0944c955-dc0b-4c87-a006-02d0f12adeec',
  'b9a36f7a-3fdf-48fa-937f-f33aebb02834',
  '2670ff3f-57e5-4871-b582-444d168f7da9',
];

const unconditionalSpeechFilenames = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];

const acousticOnlyFilenames = [
  'ss_only_1',
  'ss_only_2',
  'ss_only_3',
  'ss_only_4',
  'ss_only_5',
  'ss_only_6',
  'ss_only_7',
  'ss_only_8',
];

const soundStreamComparisonFilenames = [
  '0944c955-dc0b-4c87-a006-02d0f12adeec',
  '7e4cf66b-7da9-4261-954b-17004f4684e6',
  'f3ae9437-ab9b-4444-ad12-4ea2d29fc6f8',
  'ed2dc23b-868a-470f-a843-b22091152ea2',
  'd3b1f250-2e55-4f6c-be0d-7d7fc9428464',
  'bb632b5f-6c31-4966-a24d-dc112ba79873',
  '497b5be1-e5f7-49dd-b244-67df3817d25b',
  '3242966b-4c6a-49a2-8687-efd36546c8ba',

];

const pianoFilenames = ['4', '0', '1', '2'];

generateContinuationTable(
    'librispeech-test-clean-table', librispeechTestCleanContinuationFilenames,
    1);

generateContinuationTable(
    'librispeech-test-other-table', librispeechTestOtherContinuationFilenames,
    1);
generateSimpleTable(
    'unconditional-speech-table', unconditionalSpeechFilenames,
    prefix = 'audio_samples/unconditional_speech/');
generateSimpleTable(
    'semantic-only-table', acousticOnlyFilenames,
    prefix = 'audio_samples/speech_soundstream_only/');

generateAcousticGenerationTable(
    'acoustic-generation-table', librispeechTestCleanContinuationFilenames, 1);

generateSoundStreamTable(
    'soundstream-table', soundStreamComparisonFilenames, 1);

generatePianoTable('piano-table', pianoFilenames, 1);

$(document).ready(function() {
  for (let i = 1; i <= 5; i++) {
    let id = '#clean-cont-page-' + i;
    $(id).click(function() {
      generateContinuationTable(
          'librispeech-test-clean-table',
          librispeechTestCleanContinuationFilenames, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
  for (let i = 1; i <= 2; i++) {
    let id = '#other-cont-page-' + i;
    $(id).click(function() {
      generateContinuationTable(
          'librispeech-test-other-table',
          librispeechTestOtherContinuationFilenames, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }

  for (let i = 1; i <= 5; i++) {
    let id = '#acoustic-page-' + i;
    $(id).click(function() {
      generateAcousticGenerationTable(
          'acoustic-generation-table',
          librispeechTestCleanContinuationFilenames, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }

  for (let i = 1; i <= 5; i++) {
    let id = '#soundstream-page-' + i;
    $(id).click(function() {
      generateSoundStreamTable(
          'soundstream-table', soundStreamComparisonFilenames, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});
