
function play(audio_path, player_title='') {
  show('#container');
  let playerTitle = document.getElementById('playerTitle');
  playerTitle.textContent = player_title;
  let player = document.getElementById('player');
  player.src = audio_path;
  player.play();
}

function show(selector) {
  let elements = document.querySelectorAll(selector);
  elements.forEach(function (element) {
    element.style.display = '';
  });
}

function toggle(selector) {
  let elements = document.querySelectorAll(selector);
  elements.forEach(function (element) {
    if (element.style.display == '') {
      element.style.display = 'none';
    } else {
      element.style.display = '';
    }
  });
}

function genpath(idx, obj) {
  return wavpath('gen', idx, obj);
}

function wavpath(audio_type, idx, obj) {
  let files = get_files_dict();
  let parent_table_id = obj.closest('table').id;

  let corpus = parent_table_id;
  let parent_tr_id = obj.closest('tr').id;
  let region_underscore_gender = parent_tr_id;

  let filename = files[corpus][region_underscore_gender][audio_type][idx];
  let relpath = `./audio/${filename}`;
  return relpath;
}


function get_files_dict() {

  let files = {
    'enxx_gen_tacospawn': {
        'us_female': {'gen': [
          'enxx_175c11_tacospawn/gen_52_en_us_female.mp3',
          'enxx_175c11_tacospawn/gen_67_en_us_female.mp3',
          'enxx_175c11_tacospawn/gen_69_en_us_female.mp3',
          'enxx_175c11_tacospawn/gen_53_en_us_female.mp3',
          'enxx_175c11_tacospawn/gen_46_en_us_female.mp3',
          'enxx_175c11_tacospawn/gen_61_en_us_female.mp3',
          'enxx_175c11_tacospawn/gen_78_en_us_female.mp3',
        ]},
        'us_male': {'gen': [
          'enxx_175c11_tacospawn/gen_33_en_us_male.mp3',
          'enxx_175c11_tacospawn/gen_27_en_us_male.mp3',
          'enxx_175c11_tacospawn/gen_15_en_us_male.mp3',
          'enxx_175c11_tacospawn/gen_37_en_us_male.mp3',
          'enxx_175c11_tacospawn/gen_05_en_us_male.mp3',
          'enxx_175c11_tacospawn/gen_36_en_us_male.mp3',
          'enxx_175c11_tacospawn/gen_17_en_us_male.mp3',
        ]},
      'au_male': { 'gen': [
        'enxx_175c11_tacospawn/gen_03_en_au_male.mp3',
        'enxx_175c11_tacospawn/gen_80_en_au_male.mp3',
        'enxx_175c11_tacospawn/gen_86_en_au_male.mp3',
        'enxx_175c11_tacospawn/gen_09_en_au_male.mp3',
        'enxx_175c11_tacospawn/gen_28_en_au_male.mp3',
        'enxx_175c11_tacospawn/gen_35_en_au_male.mp3',
        'enxx_175c11_tacospawn/gen_38_en_au_male.mp3',
        ]},
      'au_female': { 'gen': [
          'enxx_175c11_tacospawn/gen_124_en_au_female.mp3',
          'enxx_175c11_tacospawn/gen_147_en_au_female.mp3',
          'enxx_175c11_tacospawn/gen_122_en_au_female.mp3',
          'enxx_175c11_tacospawn/gen_80_en_au_female.mp3',
          'enxx_175c11_tacospawn/gen_56_en_au_female.mp3',
          'enxx_175c11_tacospawn/gen_65_en_au_female.mp3',
          'enxx_175c11_tacospawn/gen_1375_en_au_female.mp3',
        ]},
      'gb_male': {'gen': [
          'enxx_175c11_tacospawn/gen_05_en_gb_male.mp3',
          'enxx_175c11_tacospawn/gen_01_en_gb_male.mp3',
          'enxx_175c11_tacospawn/gen_15_en_gb_male.mp3',
          'enxx_175c11_tacospawn/gen_08_en_gb_male.mp3',
          'enxx_175c11_tacospawn/gen_19_en_gb_male.mp3',
          'enxx_175c11_tacospawn/gen_20_en_gb_male.mp3',
          'enxx_175c11_tacospawn/gen_56_en_gb_male.mp3',
        ]},
      'gb_female': {'gen': [
          'enxx_175c11_tacospawn/gen_137_en_gb_female.mp3',
          'enxx_175c11_tacospawn/gen_123_en_gb_female.mp3',
          'enxx_175c11_tacospawn/gen_54_en_gb_female.mp3',
          'enxx_175c11_tacospawn/gen_140_en_gb_female.mp3',
          'enxx_175c11_tacospawn/gen_104_en_gb_female.mp3',
          'enxx_175c11_tacospawn/gen_119_en_gb_female.mp3',
          'enxx_175c11_tacospawn/gen_49_en_gb_female.mp3',
        ],
      }
    },
    'enus1100_gen_closest_quickbrown': {
      'us_male': {
        'gen_01': [
          'enus1100_gen_closest_quickbrown/gen_01_gclosest_en_us_male.mp3',
          'enus1100_gen_closest_quickbrown/gen_01_gfurthest_en_us_male.mp3',
          'enus1100_gen_closest_quickbrown/gen_01_sclosest_en_us_male.mp3',
          'enus1100_gen_closest_quickbrown/gen_01_sfurthest_en_us_male.mp3',
          'enus1100_gen_closest_quickbrown/gen_01_synth_en_us_male.mp3',
        ],
        'gen_07': [
          'enus1100_gen_closest_quickbrown/gen_07_gclosest_en_us_male.mp3',
          'enus1100_gen_closest_quickbrown/gen_07_gfurthest_en_us_male.mp3',
          'enus1100_gen_closest_quickbrown/gen_07_sclosest_en_us_male.mp3',
          'enus1100_gen_closest_quickbrown/gen_07_sfurthest_en_us_male.mp3',
          'enus1100_gen_closest_quickbrown/gen_07_synth_en_us_male.mp3',
        ],
        'gen_189': [
          'enus1100_gen_closest_quickbrown/gen_189_gclosest_en_us_male.mp3',
          'enus1100_gen_closest_quickbrown/gen_189_gfurthest_en_us_male.mp3',
          'enus1100_gen_closest_quickbrown/gen_189_sclosest_en_us_male.mp3',
          'enus1100_gen_closest_quickbrown/gen_189_sfurthest_en_us_male.mp3',
          'enus1100_gen_closest_quickbrown/gen_189_synth_en_us_male.mp3',
        ],
      },
      'us_female': {
        'gen_738': [
          'enus1100_gen_closest_quickbrown/gen_738_gclosest_en_us_female.mp3',
          'enus1100_gen_closest_quickbrown/gen_738_gfurthest_en_us_female.mp3',
          'enus1100_gen_closest_quickbrown/gen_738_sclosest_en_us_female.mp3',
          'enus1100_gen_closest_quickbrown/gen_738_sfurthest_en_us_female.mp3',
          'enus1100_gen_closest_quickbrown/gen_738_synth_en_us_female.mp3',
        ],
        'gen_688': [
          'enus1100_gen_closest_quickbrown/gen_688_gclosest_en_us_female.mp3',
          'enus1100_gen_closest_quickbrown/gen_688_gfurthest_en_us_female.mp3',
          'enus1100_gen_closest_quickbrown/gen_688_sclosest_en_us_female.mp3',
          'enus1100_gen_closest_quickbrown/gen_688_sfurthest_en_us_female.mp3',
          'enus1100_gen_closest_quickbrown/gen_688_synth_en_us_female.mp3',
        ],
        'gen_903': [
          'enus1100_gen_closest_quickbrown/gen_903_gclosest_en_us_female.mp3',
          'enus1100_gen_closest_quickbrown/gen_903_gfurthest_en_us_female.mp3',
          'enus1100_gen_closest_quickbrown/gen_903_sclosest_en_us_female.mp3',
          'enus1100_gen_closest_quickbrown/gen_903_sfurthest_en_us_female.mp3',
          'enus1100_gen_closest_quickbrown/gen_903_synth_en_us_female.mp3',
        ]
      }
    },
    'enus1100_sclosest_quickbrown': {
      'us_male': {
        'lok0262': [
          'enus1100_synth_closest_quickbrown/lok0262_gclosest_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0262_gfurthest_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0262_gt_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0262_sclosest_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0262_sfurthest_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0262_synth_en_us_male.mp3',
        ],
        'lok0357': [
          'enus1100_synth_closest_quickbrown/lok0357_gclosest_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0357_gfurthest_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0357_gt_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0357_sclosest_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0357_sfurthest_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0357_synth_en_us_male.mp3',
        ],
        'lok0697': [
          'enus1100_synth_closest_quickbrown/lok0697_gclosest_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0697_gfurthest_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0697_gt_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0697_sclosest_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0697_sfurthest_en_us_male.mp3',
          'enus1100_synth_closest_quickbrown/lok0697_synth_en_us_male.mp3',
        ],
      },
      'us_female': {
        'lok0468': [
          'enus1100_synth_closest_quickbrown/lok0468_gclosest_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok0468_gfurthest_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok0468_gt_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok0468_sclosest_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok0468_sfurthest_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok0468_synth_en_us_female.mp3',
        ],
        'lok0755': [
          'enus1100_synth_closest_quickbrown/lok0755_gclosest_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok0755_gfurthest_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok0755_gt_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok0755_sclosest_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok0755_sfurthest_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok0755_synth_en_us_female.mp3',
        ],
        'lok1069': [
          'enus1100_synth_closest_quickbrown/lok1069_gclosest_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok1069_gfurthest_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok1069_gt_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok1069_sclosest_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok1069_sfurthest_en_us_female.mp3',
          'enus1100_synth_closest_quickbrown/lok1069_synth_en_us_female.mp3',
        ]
      }
    }
  };
  return files;
}

