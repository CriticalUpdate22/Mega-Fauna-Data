import { IDatabaseEntry } from '../../src/Interface/Interface'

const data: any[] = [
    {   
        scientific_name: "దుగోంగ్ దుగోంగ్" ,
        image_path: "Dugong" ,
        local_name: "దుగాంగ్" ,
        IUCN_status: "VU" ,
        description: "ఒక స్థూపాకార మరియు గొట్టం లాంటి తల సముద్రపు గడ్డిని తినడానికి క్రిందికి వంగి ఉంటుంది. ట్రంక్ నడుము ప్రాంతంలో విశాలంగా ఉంటుంది మరియు వెనుకకు ఇరుకైనది మరియు తోక ఫ్లూక్" ,
        size: "పుట్టినప్పుడు పొడవు: 1-1.3m, పెద్దల పొడవు: 2.5-2.7m, పెద్దల బరువు: 570 Kg" ,
        colour_pattern: "మురికి గోధుమ బూడిద" ,
        dorsal_fin: "వాటికి దోర్సాల్ రెక్కలు లేవు" ,
        teeth_count: "దవడలోని ప్రతి క్వాడ్రంట్" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "నివాస జనాభా" ,
        habitat_preferance: "దుగోంగ్" ,
        type: "Marine Mammals" ,
    },
    {
        scientific_name: " మెగాప్టెరా నోవాయాంగ్లియా" ,
        image_path: "Humpback-Whale" ,
        local_name: "హంప్" ,
        IUCN_status: "LC" ,
        description: "ఇతర రోర్" ,
        size: "పుట్టినప్పుడు పొడవు: 4.3m, పెద్దల పొడవు: 11-17m, పెద్దల బరువు: 40000 Kg" ,
        colour_pattern: "నలుపు లేదా బూడిద రంగు, గొంతు మరియు బొడ్డుపై తెల్లటి ప్రాంతం ఉంటుంది. ఫ్లిప్పర్స్ కింద తెల్లగా ఉంటాయి, కొన్నిసార్లు పైన కూడా ఉంటాయి." ,
        dorsal_fin: "డోర్సల్ ఫిన్ తోక ఫ్లూక్ గీత నుండి శరీర పొడవులో మూడింట ఒక వంతు కంటే తక్కువగా ఉంటుంది, ఇది చిన్నదిగా మరియు త్రిభుజాకారంగా లేదా పెద్దదిగా మరియు కొడవలి ఆకారంలో ఉండవచ్చు, ఇది తరచుగా ఒక మెట్టు లేదా మూపురం కలిగి ఉంటుంది, ఈ జాతికి దాని సాధారణ పేరును ఇస్తుంది." ,
        teeth_count: null,
        baleen_plate: "350-370 జతల" ,
        throat_grooves: "గొంతు గీతల సంఖ్య 14 నుండి 35 వరకు, నాభి వరకు విస్తరించి ఉంటుంది" ,
        seasonal_movement: "అరేబియా సముద్రం లోపల" ,
        habitat_preferance: " తీర మరియు కాంటినెంటల్ షెల్ఫ్-ఎడ్జ్ నీటిలో కనుగొనబడింది" ,
        type: "Marine Mammals" ,
    },
    {
        scientific_name: "బాలేనోప్టెరా మస్క్యులస్" ,
        image_path: "Blue-Whale" ,
        local_name: "నీలి తిమింగలం" ,
        IUCN_status: "EN" ,
        description: "విశాలమైన 'U' ఆకారపు తల ఒకే సెంట్రల్ రిడ్జ్" ,
        size: "పుట్టినప్పుడు పొడవు: 7-8m, పెద్దల పొడవు: 25-29m, పెద్దల బరువు: 72000-135000 Kg" ,
        colour_pattern: "మోట్లింగ్" ,
        dorsal_fin: "రోస్ట్రమ్ చిట్కా నుండి 3/4వ వంతులో చాలా చిన్న డోర్సల్ ఫిన్" ,
        teeth_count: null,
        baleen_plate: "260-400 జతల బలీన్" ,
        throat_grooves: "70-118 (ఎక్కువగా 90-95) వెంట్రల్ ప్లీట్స్ దాదాపు నాభి వరకు" ,
        seasonal_movement: "అరేబియా సముద్రం - బంగాళాఖాతం" ,
        habitat_preferance: "ఓపెన్-ఓషన్ జాతులు, ఆహారం కోసం మరియు బహుశా సంతానోత్పత్తి కోసం తీరానికి దగ్గరగా కనిపిస్తాయి. అరేబియా సముద్రంలో బహుశా పిగ్మీ బ్లూ వేల్ కూడా ఉండవచ్చు." ,
        type: "Marine Mammals" ,
    },
    {
        scientific_name: "బాలేనోప్టెరా ఈదేని" ,
        image_path: "Bryde’s-Whale" ,
        local_name: "బ్రైడ్ యొక్క వేల్" ,
        IUCN_status: "LC" ,
        description: "స్ట్రెయిట్ ట్రైలింగ్ అంచులతో విస్తృత ఫ్లూక్" ,
        size: "పుట్టినప్పుడు పొడవు: 4m, పెద్దల పొడవు: 15-16.5m, పెద్దల బరువు: 40000 Kg" ,
        colour_pattern: "ముదురు బూడిద" ,
        dorsal_fin: " రోస్ట్రమ్ చిట్కా నుండి 3/4వ వంతు వద్ద పొడవైన మరియు ఫాల్కేట్ డోర్సల్ ఫిన్" ,
        teeth_count: null,
        baleen_plate: "250-370 జతల బలీన్" ,
        throat_grooves: "40- 70 (అరేబియా సముద్రం కోసం 42-54) వెంట్రల్ ప్లీట్స్ నాభి లేదా అంతకు మించి" ,
        seasonal_movement: "నివాస జనాభా" ,
        habitat_preferance: "ఆఫ్" ,
        type: "Marine Mammals" ,
    },
    {
        scientific_name: "బాలేనోప్టెరా ఓమురై" ,
        image_path: "Omura's-Whale" ,
        local_name: "ఒమురా యొక్క తిమింగలం" ,
        IUCN_status: "DD" ,
        description: "ఒకే ప్రముఖ కేంద్ర శిఖరంతో 'V' ఆకారపు తలతో చిన్న మరియు క్రమబద్ధీకరించబడిన శరీరాన్ని కలిగి ఉంటుంది. లేత క్రమరహిత చెవ్రాన్" ,
        size: "పుట్టినప్పుడు పొడవు: 3.5-4m, పెద్దల పొడవు: 9.6-11.5m, పెద్దల బరువు: 20000 Kg" ,
        colour_pattern: "ముదురు డోర్సల్ మరియు లైట్ వెంట్రల్ బాడీతో టూ-టోన్ బాడీ కలరింగ్." ,
        dorsal_fin: "చాలా ఫాల్కేట్ మరియు బ్యాక్" ,
        teeth_count: null,
        baleen_plate: "180-210 జతల పొట్టి మరియు విశాలమైన బలీన్, ముందు పసుపు తెలుపు మరియు వెనుక నలుపు" ,
        throat_grooves: "80-90 వెంట్రల్ ప్లీట్స్ నాభికి మించి విస్తరించి ఉన్నాయి" ,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "202 మీటర్ల వరకు లోతులేని కాంటినెంటల్ షెల్ఫ్" ,
        type: "Marine Mammals" ,
    },
    {
        scientific_name: "మెసోప్లోడాన్ పసిఫికస్" ,
        image_path: "Longman's-Beaked-Whale" ,
        local_name: "లాంగ్" ,
        IUCN_status: "DD" ,
        description: "ముక్కు మరియు పుచ్చకాయ మధ్య మడతతో ఒక ప్రముఖ ముక్కు మరియు పొడుచుకు వచ్చిన నుదిటితో సన్నని ఆకారపు శరీరాన్ని కలిగి ఉంటుంది. లీనియర్ రేక్ గుర్తులు లేవు మరియు ఫ్లూక్స్" ,
        size: "పుట్టినప్పుడు పొడవు: 2.9m, పెద్దల పొడవు: 6.5m, పెద్దల బరువు: Unknown" ,
        colour_pattern: "డోర్సల్ బాడీ బూడిద నుండి గోధుమ బూడిద రంగులో ఉంటుంది, అయితే వైపులా, అండర్" ,
        dorsal_fin: "వెనుక మధ్య బిందువు వెనుక సాపేక్షంగా పొడవైన మరియు ఫాల్కేట్ డోర్సల్ ఫిన్" ,
        teeth_count: "చిగుళ్లలో ఒక్క జత పళ్లు బయటికి కనిపించవు" ,
        baleen_plate: null,
        throat_grooves: "V-ఆకారంలో d గొంతు గాడి ఉంది" ,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "లోతైన మహాసముద్రాలలో ఆఫ్" ,
        type: "Marine Mammals" ,
    },
    {
        scientific_name: "మెసోప్లోడాన్ హోటౌలా" ,
        image_path: "Deraniyagala’s-Beaked-Whale" ,
        local_name: "Deraniyagala యొక్క ముక్కు తిమింగలం" ,
        IUCN_status: "DD" ,
        description: "కుదురు ఆకారపు శరీరం మరియు చిన్న ఇరుకైన ఫ్లిప్పర్" ,
        size: "పుట్టినప్పుడు పొడవు: 2m, పెద్దల పొడవు: 3.9-4.8m, పెద్దల బరువు: Unknown" ,
        colour_pattern: "తెల్లటి మచ్చలతో ముదురు బూడిద రంగు. కింది దవడ యొక్క కొన తెల్లగా ఉంటుంది." ,
        dorsal_fin: "రోస్ట్రమ్ చిట్కా నుండి 2/3వ వంతు చిన్న ఫాల్కేట్ డోర్సల్ ఫిన్" ,
        teeth_count: "ఒకే జత ముందుకు చూపే శంఖాకార దంతాలు వయోజన మగవారి దిగువ దవడలో మాత్రమే విస్ఫోటనం చెందుతాయి" ,
        baleen_plate: null,
        throat_grooves: " V-ఆకారపు గొంతు గాడి ఉంది" ,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "పంపిణీ తెలియదు కానీ లోతైన నీటిలో ఆఫ్" ,
        type: "Marine Mammals" ,
    },
    {
        scientific_name: "మెసోప్లోడాన్ జింక్గోడెన్స్" ,
        image_path: "Ginkgo-Toothed-Beaked-Whale" ,
        local_name: "జింగో-పంటి ముక్కు తిమింగలం" ,
        IUCN_status: "DD" ,
        description: "చిన్న ఇరుకైన ఫ్లిప్పర్" ,
        size: "పుట్టినప్పుడు పొడవు: 2-2.5m, పెద్దల పొడవు: 5.3m, పెద్దల బరువు: Unknown" ,
        colour_pattern: "రాస్ట్రమ్" ,
        dorsal_fin: "రోస్ట్రమ్ చిట్కా నుండి 2/3 వంతు చిన్న డోర్సల్ ఫిన్" ,
        teeth_count: "దిగువ దవడ మధ్యలో వెడల్పుగా, చదునుగా ఉన్న s-ఆకారపు దంతాలు వయోజన మగవారిలో మాత్రమే విస్ఫోటనం చెందుతాయి." ,
        baleen_plate: null,
        throat_grooves: "ఒక జత గొంతు గీతలు ఉన్నాయి" ,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "పంపిణీ తెలియదు; ఆఫ్" ,
        type: "Marine Mammals" ,
    },
    {
        scientific_name: "జిఫియస్ కేవిరోస్ట్రిస్" ,
        image_path: "Cuvier's-Beaked-Whale" ,
        local_name: "క్యూవియర్ యొక్క ముక్కు తిమింగలం" ,
        IUCN_status: "LC" ,
        description: "చిన్న ముక్కు మరియు చిన్న ఇరుకైన ఫ్లిప్పర్" ,
        size: "పుట్టినప్పుడు పొడవు: 2.7m, పెద్దల పొడవు: 6-7m, పెద్దల బరువు: 3000 Kg" ,
        colour_pattern: "బూడిద నుండి లేత రస్టీ బ్రౌన్ వరకు కుకీ కట్టర్ మచ్చలు మరియు రేక్ గుర్తులు అంతటా. మగవారి తల మరియు పైభాగంలో చాలా ఎక్కువ తెల్లగా ఉంటుంది." ,
        dorsal_fin: "రోస్ట్రమ్ చిట్కా నుండి 2/3వ వంతు చిన్న ఫాల్కేట్ డోర్సల్ ఫిన్" ,
        teeth_count: "ఒక జత శంఖాకార దంతాలు వయోజన మగవారి దిగువ దవడ యొక్క కొన వద్ద మాత్రమే విస్ఫోటనం చెందుతాయి." ,
        baleen_plate: null,
        throat_grooves: "ఒక జత V-ఆకారపు గొంతు గీతలు ఉన్నాయి" ,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "నిటారుగా ఉన్న ఖండాంతర వాలులకు దగ్గరగా ఆఫ్" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "మెసోప్లోడాన్ డెన్సిరోస్ట్రిస్" ,
        image_path: "Blainville's-Beaked-Whale" ,
        local_name: "బ్లెయిన్" ,
        IUCN_status: "LC" ,
        description: "చంద్రవంక ఆకారపు బ్లోహోల్" ,
        size: "పుట్టినప్పుడు పొడవు: 2-2.5m, పెద్దల పొడవు: 4.7m, పెద్దల బరువు: 1033 Kg" ,
        colour_pattern: "కుకీ కట్టర్లు మరియు రేక్ గుర్తుల ద్వారా తెల్లటి మచ్చలతో బూడిద నుండి గోధుమ బూడిద రంగు." ,
        dorsal_fin: "రోస్ట్రమ్ చిట్కా నుండి 2/3వ వంతు చిన్న డోర్సల్ ఫిన్" ,
        teeth_count: "ఒక జత దంతాలు నోటి నుండి వెలువడుతున్నాయి." ,
        baleen_plate: null,
        throat_grooves: "ఒకే జత గొంతు గీతలు ఉన్నాయి" ,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "200మీ లేదా అంతకంటే ఎక్కువ సముద్రతీర లోతైన నీటిలో కనుగొనబడింది" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ఫిసెటర్ మాక్రోసెఫాలస్" ,
        image_path: "Sperm-Whale" ,
        local_name: "స్పెర్మ్ వేల్" ,
        IUCN_status: "VU" ,
        description: "పంటి సెటాసియన్లలో అతిపెద్దది, శరీరం ముడతలతో స్థూలంగా ఉంటుంది. తల శరీర పొడవులో 1/3 వంతు ఉంటుంది మరియు పక్క నుండి చతురస్రాకారంగా కనిపిస్తుంది. ఎగువ దవడతో పోలిస్తే దిగువ దవడ చాలా ఇరుకైనది మరియు దంతాలను కలిగి ఉంటుంది. పై దవడకు దంతాలు లేవు. ఒక సింగిల్ s-ఆకారపు బ్లోహోల్ తలకు కొంచెం ఎడమవైపు ఉంచబడుతుంది/ ఫ్లిప్పర్లు చిన్నవిగా మరియు గరిటెలాంటి ఆకారంలో ఉంటాయి. ఫ్లూక్ స్ట్రెయిట్ ట్రైలింగ్ ఎడ్జ్" ,
        size: "పుట్టినప్పుడు పొడవు: 35-45m, పెద్దల పొడవు: 12.5-19.2m, పెద్దల బరువు: 57000 Kg" ,
        colour_pattern: "నలుపు నుండి గోధుమ బూడిద రంగు" ,
        dorsal_fin: "తక్కువ నాబీ డోర్సల్ ఫిన్" ,
        teeth_count: "కింది దవడలో 18-26 జతల దంతాలు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: "2-10 చిన్న గొంతు గీతలు" ,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "ఖండాంతర వాలుకు సమీపంలో, 1000మీ కంటే లోతుగా ఉన్న నీటిలో మరియు తీరానికి దగ్గరగా ఉన్న జలాంతర్గామి లోయలు కనుగొనబడ్డాయి" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "కోగియా సిమా" ,
        image_path: "Dwarf-Sperm-Whale" ,
        local_name: "మరగుజ్జు స్పెర్మ్ వేల్" ,
        IUCN_status: "LC" ,
        description: "సొరచేప లాంటి తల మరియు చిన్న ఇరుకైన దిగువ దవడతో దృఢమైన శరీరాన్ని కలిగి ఉంటుంది. బ్లోహోల్ రోస్ట్రమ్ యొక్క కొన నుండి > 10% దూరంలో ఉంది. కంటి వెనుక తప్పుడు గిల్ స్లిట్ లాగా ఒక గుర్తు ఉంది మరియు చిన్న ఫ్లిప్పర్" ,
        size: "పుట్టినప్పుడు పొడవు: 1m, పెద్దల పొడవు: 2.5-2.7m, పెద్దల బరువు: 272 Kg" ,
        colour_pattern: "పైభాగంలో ముదురు బూడిద నుండి గోధుమ నలుపు. తప్పుడు గిల్ స్లిట్ లాగా కనిపించే కంటి వెనుక ఒక గుర్తు." ,
        dorsal_fin: "వెనుక మధ్యలో పొడవైన ఫాల్కేట్ డోర్సల్ ఫిన్" ,
        teeth_count: "దిగువ దవడలో 7-12 జతల దంతాలు ఉంటాయి; ఎగువ దవడ కొన్నిసార్లు 3 జతల దంతాలను కలిగి ఉంటుంది" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "ఆఫ్" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "కోగియా బ్రీవిసెప్స్" ,
        image_path: "Pygmy-Sperm-Whale" ,
        local_name: "పిగ్మీ స్పెర్మ్ వేల్" ,
        IUCN_status: "LC" ,
        description: "దృఢమైన శరీరం; తప్పుడు గిల్ చీలిక వలె కనిపించే కంటి వెనుక ఒక గుర్తు; షార్క్ వంటి తల; చిన్న మరియు ఇరుకైన దిగువ దవడ; తలకు దగ్గరగా ఉండే చిన్న ఫ్లిప్పర్లు; బ్లోహోల్ మరియు డోర్సల్ ఫిన్ మధ్య కొంచెం మూపురం ఉంటుంది; బ్లోహోల్ రోస్ట్రమ్ చిట్కా నుండి> 10% దూరంలో ఉంది." ,
        size: "పుట్టినప్పుడు పొడవు: 1.2m, పెద్దల పొడవు: 2.7-3.9m, పెద్దల బరువు: 450 Kg" ,
        colour_pattern: "పైభాగంలో ముదురు బూడిద నుండి గోధుమ నలుపు. తప్పుడు గిల్ స్లిట్ లాగా కనిపించే కంటి వెనుక ఒక గుర్తు." ,
        dorsal_fin: "చిన్న వంగిన డోర్సల్ ఫిన్ వెనుక మధ్యలో బాగా వెనుకబడి ఉంటుంది" ,
        teeth_count: "దిగువ దవడలో 10-16 జతల పళ్ళు ఉంటాయి" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "ఖండాంతర వాలుపై మరియు లోతైన నీటిలో కనుగొనబడింది మరగుజ్జు స్పెర్మ్ వేల్ వలె సాధారణం కాదు" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ఓర్కెల్లా బ్రీవిరోస్ట్రిస్" ,
        image_path: "Irrawaddy-Dolphin" ,
        local_name: "ఇరావాడి డాల్ఫిన్" ,
        IUCN_status: "EN" ,
        description: "ప్రముఖ ముక్కు లేకుండా గుండ్రని ముక్కును కలిగి ఉంటుంది. ఫ్లిప్పర్లు పెద్దవి మరియు తెడ్డు ఆకారంలో ఉంటాయి మరియు పెద్దలలో మెడ మడత ఉంటుంది." ,
        size: "పుట్టినప్పుడు పొడవు: 1m, పెద్దల పొడవు: 2.5m, పెద్దల బరువు: 130Kg" ,
        colour_pattern: "ఉక్కు బూడిద రంగు" ,
        dorsal_fin: "శరీరం యొక్క మధ్య బిందువు వెనుక డోర్సల్ ఫిన్ వంటి నాబ్" ,
        teeth_count: "ఎగువ దవడ 8-19 జతల పళ్ళు, దిగువ దవడ 13-14 జతల పళ్ళు" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "తీరప్రాంత జలాలు, మడుగులు, ఈస్ట్యూరీలు మరియు నదులలో కనుగొనబడింది భారతదేశంలోని ప్రస్తుత పంపిణీలో చిలికా మడుగు, ఉత్తర ఒరిస్సా మరియు పశ్చిమ బెంగాల్" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "గ్లోబిసెఫాలా మాక్రోరించస్" ,
        image_path: "Short-Finned-Pilot-Whale" ,
        local_name: "షార్ట్-ఫిన్డ్ పైలట్ వేల్" ,
        IUCN_status: "LC" ,
        description: "నల్ల చేపలలో ఒకటి, పైలట్ తిమింగలాలు శరీరం యొక్క ముందు భాగంలో ఉంచబడిన డోర్సల్ ఫిన్" ,
        size: "పుట్టినప్పుడు పొడవు: 1.4-1.9m, పెద్దల పొడవు: 5.5-7.2m, పెద్దల బరువు: 3600 Kg" ,
        colour_pattern: "నలుపు నుండి గోధుమ బూడిద రంగు. ఇది చెస్" ,
        dorsal_fin: "డోర్సల్ ఫిన్ వెనుక ఒక లేత రంగు జీను నమూనా; పెద్ద గుండ్రని దోర్సాల్ ఫిన్, తక్కువ మరియు వెనుక మధ్య బిందువు ముందు భాగంలో ఉంటుంది" ,
        teeth_count: "ప్రతి దవడలో 7-9 జతల పళ్ళు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "లోతైన ఆఫ్" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ఓర్కినస్ ఓర్కా" ,
        image_path: "Killer-Whale" ,
        local_name: "పోప్పరమీను" ,
        IUCN_status: "DD" ,
        description: "డాల్ఫిన్" ,
        size: "పుట్టినప్పుడు పొడవు: 2.1-2.6m, పెద్దల పొడవు: 8.5-9.8m, పెద్దల బరువు: 7500-10000 Kg" ,
        colour_pattern: "డోర్సల్ ఫిన్ వెనుక లేత రంగు జీనుతో నలుపు-తెలుపు రంగు నమూనాను గుర్తించడం సులభం." ,
        dorsal_fin: "దాని చాలా పెద్ద త్రిభుజాకార నిటారుగా ఉన్న డోర్సల్ ఫిన్ ద్వారా సులభంగా గుర్తించవచ్చు (మగ డోర్సల్ ఫిన్ 2 మీ కంటే ఎక్కువ ఎత్తు; ఆడవారికి 09 మీ ఎత్తు వరకు వంగిన రెక్క ఉంటుంది)" ,
        teeth_count: "ప్రతి దవడలో 10-14 జతల దంతాలు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "కాస్మోపాలిల్టన్ జాతి సాధారణంగా తీరానికి సమీపంలో మరియు సముద్ర తీరానికి సమీపంలో కనిపిస్తుంది" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "సూడోర్కా క్రాసిడెన్స్" ,
        image_path: "False-Killer-Whale" ,
        local_name: "ఫాల్స్ కిల్లర్ వేల్" ,
        IUCN_status: "NT" ,
        description: "గుండ్రని ముక్కుతో మరియు మెత్తగా వాలుగా ఉండే పుచ్చకాయతో పొడవైన సన్నని శరీరాన్ని కలిగి ఉంటుంది. ముక్కు ప్రముఖమైనది కాదు. ఫ్లిప్పర్" ,
        size: "పుట్టినప్పుడు పొడవు: 1.5-2.1m, పెద్దల పొడవు: 5-6m, పెద్దల బరువు: 2000 Kg" ,
        colour_pattern: "ఛాతీ మరియు బొడ్డుపై లేత బూడిద రంగుతో నలుపు నుండి బూడిదరంగు నలుపు. చాలా మందమైన కేప్ కీల్" ,
        dorsal_fin: "డోర్సాల్ ఫిన్ పొడవుగా ఉంటుంది, వెనుకవైపు మధ్యలో గుండ్రని చిట్కాతో ఫాల్కేట్ అవుతుంది" ,
        teeth_count: "ప్రతి దవడలో 7-12 జతల పళ్ళు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "లోతైన ఆఫ్" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ఫెరేసా అటెనువాటా" ,
        image_path: "Pygmy-Killer-Whale" ,
        local_name: "పిగ్మీ కిల్లర్ వేల్" ,
        IUCN_status: "LC" ,
        description: "పొడవాటి శరీరాన్ని కలిగి ఉంటుంది, డోర్సల్ ఫిన్ ముందు దృఢంగా ఉంటుంది మరియు తర్వాత సన్నగా ఉంటుంది. ముక్కు వాలుగా ఉండే పుచ్చకాయతో గుండ్రంగా ఉంటుంది. ముక్కు ప్రముఖమైనది కాదు. ఫ్లిప్పర్లు గుండ్రని చిట్కాలతో పొడవుగా ఉంటాయి." ,
        size: "పుట్టినప్పుడు పొడవు: 80cm, పెద్దల పొడవు: 2.6m, పెద్దల బరువు: 225 Kg" ,
        colour_pattern: "నలుపు నుండి బూడిదరంగు నలుపు. పెదవులు మరియు ముక్కు చిట్కాలు తెల్లగా ఉంటాయి. డోర్సల్ ఫిన్ కింద ముంచిన లేత బూడిద రంగు కేప్ ప్రముఖమైనది." ,
        dorsal_fin: "డోర్సల్ ఫిన్ పొడవుగా ఉంటుంది, వెనుక మధ్య బిందువు వద్ద తక్కువ కోణంలో ఫాల్కేట్ పెరుగుతుంది" ,
        teeth_count: "ఎగువ దవడ 8-11 జతల పళ్ళు మరియు దిగువ దవడ 11-13 జతల" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "లోతైన ఆఫ్" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "పెపోనోసెఫాలా ఎలక్ట్రా" ,
        image_path: "Melon-Headed-Whale" ,
        local_name: "మెలోన్-హెడ్ వేల్" ,
        IUCN_status: "LC" ,
        description: "పొడవాటి సన్నని శరీరం మరియు పుచ్చకాయతో గుండ్రంగా ఉండే ముక్కుతో ఉంటుంది. ముక్కు యొక్క చిన్న సూచన ఉంది. ఫ్లిప్పర్లు పొడవుగా, కోణాలుగా మరియు కొడవలి ఆకారంలో ఉంటాయి." ,
        size: "పుట్టినప్పుడు పొడవు: 1m, పెద్దల పొడవు: 2.6m, పెద్దల బరువు: 275 Kg" ,
        colour_pattern: "తెల్లగా ఉండే పెదవులు మరియు ముక్కు చిట్కాలతో బూడిదరంగు నలుపు రంగు. డోర్సల్ ఫిన్ కింద లేత బూడిద రంగు కేప్ డిప్పింగ్ (పిగ్మీ కిల్లర్ వేల్స్" ,
        dorsal_fin: "డోర్సాల్ ఫిన్ పొడవుగా ఉంటుంది, వెనుక మధ్యభాగంలో ఫాల్కేట్ అవుతుంది" ,
        teeth_count: "ప్రతి దవడలో 20-25 జతల పళ్ళు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "లోతైన ఆఫ్" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "గ్రాంపస్ గ్రిసియస్" ,
        image_path: "Risso's-Dolphin" ,
        local_name: "రిస్సో యొక్క డాల్ఫిన్" ,
        IUCN_status: "LC" ,
        description: "మొద్దుబారిన తల మరియు పైకి వాలుగా ఉండే మౌత్" ,
        size: "పుట్టినప్పుడు పొడవు: 1-1.5m, పెద్దల పొడవు: 3.8m, పెద్దల బరువు: 500 Kg" ,
        colour_pattern: "బూడిదరంగు తెల్లగా ఉంటుంది, శరీరంలోని చాలా భాగం రేక్ గుర్తులతో ఎక్కువగా మచ్చలు కలిగి ఉంటుంది." ,
        dorsal_fin: "డోర్సల్ ఫిన్ పొడవుగా, సన్నగా, వెనుక మధ్యలో నిటారుగా ఉంటుంది" ,
        teeth_count: "దిగువ దవడలో 2-7 జతల పళ్ళు ఉంటాయి మరియు పై దవడలో 1 జత పళ్ళు లేదా ఏవీ లేవు; దంతాలు సాధారణంగా ఎప్పుడూ అరిగిపోతాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "ఖండాంతర వాలు నుండి మరియు బయటి షెల్ఫ్ యొక్క లోతైన ప్రాంతాలలో కనుగొనబడింది" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "స్టెనో బ్రెడనెన్సిస్" ,
        image_path: "Rough-Toothed-Dolphin" ,
        local_name: "కఠినమైన దంతాల డాల్ఫిన్" ,
        IUCN_status: "LC" ,
        description: "కోణాల శంఖు ఆకారపు తలతో దృఢమైన శరీరం మరియు మడత లేకుండా మెల్లగా వాలుగా ఉండే పుచ్చకాయను కలిగి ఉంటుంది. ముక్కు పొడవుగా ఉంటుంది మరియు ఫ్లిప్పర్లు పెద్దవిగా ఉంటాయి." ,
        size: "పుట్టినప్పుడు పొడవు: 1m, పెద్దల పొడవు: 2.65m, పెద్దల బరువు: 155 Kg" ,
        colour_pattern: "పైన బూడిదరంగు నలుపు, గులాబీ రంగు పొత్తికడుపు మరియు దోర్సాల్ ఫిన్ కింద ముంచబడే వైపులా లేత బూడిద రంగు కేప్. బొడ్డు, పెదవులు మరియు కింది దవడ తెల్లటి రంగులో ఉంటాయి మరియు నల్లటి కంటి పాచ్ ఉంటుంది." ,
        dorsal_fin: "డోర్సల్ ఫిన్ పొడవుగా, సన్నగా, వెనుక మధ్యలో నిటారుగా ఉంటుంది; పొడవైన ముక్కు" ,
        teeth_count: "ప్రతి దవడలో 19-28 జతల పళ్ళు ఉంటాయి, దంతాలకు ముడతలు పడిన అంచులు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "లోతైన మహాసముద్ర జలాల్లో కనుగొనబడింది, భారతీయ జలాల్లో చాలా అరుదు" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "సౌసా ప్లంబియా" ,
        image_path: "Indian-Ocean-Humpback-Dolphin" ,
        local_name: "హిందూ మహాసముద్రం హంప్" ,
        IUCN_status: "EN" ,
        description: "దృఢమైన శరీరం, మధ్యస్తంగా లాగ్ ముక్కుతో. డోర్సల్ ఫిన్ వెనుక మధ్య బిందువు వద్ద, మూపురం మీద ఉంచబడుతుంది మరియు అందుకే దీనికి పేరు వచ్చింది. ఉబ్బెత్తు పుచ్చకాయ ఒక ప్రత్యేకమైన మడత మరియు గుండ్రని చిట్కాలతో పెద్ద ఫ్లిప్పర్స్ మరియు ఫ్లూక్స్ ఉన్నాయి. పెద్దలకు పెద్ద మూపురం ఉంటుంది, ముఖ్యంగా మగవారిలో." ,
        size: "పుట్టినప్పుడు పొడవు: 1m, పెద్దల పొడవు: 2.6-2.8m, పెద్దల బరువు: 280 Kg" ,
        colour_pattern: "పైన బూడిదరంగు నలుపు, గులాబీ బొడ్డు. బొడ్డు, పెదవులు మరియు దిగువ దవడ తేలికగా, పెదవులు మరియు దిగువ దవడ మరియు మచ్చల గులాబీ రంగులో ఉంటాయి. చీకటి కంటి పాచ్ ఉంది." ,
        dorsal_fin: "డోర్సల్ ఫిన్ పొట్టిగా ఉంటుంది మరియు శరీరం యొక్క మధ్య బిందువుకు ఎదురుగా ఉన్న పెద్ద మూపురం మీద కూర్చుంది" ,
        teeth_count: "ఎగువ దవడలో 33-39 జతల దంతాలు మరియు దిగువ దవడలో 31-37 జతల దంతాలు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "నివాస జనాభా" ,
        habitat_preferance: "30 మీటర్ల కంటే తక్కువ లోతు గల సముద్ర తీరానికి సమీపంలో, నదీ ముఖద్వారాలకు దగ్గరగా మరియు నదీముఖాలలో కనుగొనబడిన అత్యంత సాధారణ జాతులు భారతదేశ పశ్చిమ తీరంలో" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "సౌసా చినెన్సిస్" ,
        image_path: "Indo-Pacific-Humpback-Dolphin" ,
        local_name: "ఇండో-పసిఫిక్ హంప్" ,
        IUCN_status: "VU" ,
        description: "దృఢమైన శరీరం, మధ్యస్తంగా లాగ్ ముక్కుతో. ఒక ప్రత్యేకమైన మడతతో ఉబ్బెత్తు పుచ్చకాయ ఉంది. డోర్సల్ ఫిన్ వెనుక మధ్య బిందువు వద్ద, మూపురం మీద ఉంచబడుతుంది మరియు అందుకే దీనికి పేరు వచ్చింది. రెక్క క్రింద మెల్లగా వాలుగా ఉండే మూపురం S ప్లంబియాలో వలె ఉచ్ఛరించబడదు. రెక్క వెనుక మధ్యలో ఉంటుంది. గుండ్రని చిట్కాలతో ఫ్లిప్పర్స్ మరియు ఫ్లూక్స్. పెద్దలకు పెద్ద మూపురం ఉంటుంది, ప్రత్యేకించి మగవారిలో (వయోజన మగవారి బరువు వయోజన ఆడవారి కంటే మూడు రెట్లు ఎక్కువ)." ,
        size: "పుట్టినప్పుడు పొడవు: 1m, పెద్దల పొడవు: 2.7m, పెద్దల బరువు: 240 Kg" ,
        colour_pattern: "వైపులా మరింత గులాబీ రంగుతో, నోటి చుట్టూ మరియు గులాబీ రంగు పొత్తికడుపుతో బూడిదరంగు గులాబీ." ,
        dorsal_fin: "డోర్సల్ ఫిన్ చిన్నది" ,
        teeth_count: "ఎగువ దవడలో 32-38 జతల దంతాలు మరియు దిగువ దవడలో 29-38 జతల దంతాలు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "నివాస జనాభా" ,
        habitat_preferance: "భారతదేశంలోని తూర్పు తీరంలో ఎస్ ప్లంబియా మరియు చైనెన్సిస్ మధ్య అతివ్యాప్తి ప్రాంతం ఆగ్నేయ భారతదేశంలో ఉన్నట్లు ఊహించబడింది" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "టర్సియోప్స్ అడుంకస్" ,
        image_path: "Indo-Pacific-Bottlenose-Dolphin" ,
        local_name: "ఇండో-పసిఫిక్ బాటిల్" ,
        IUCN_status: "NT" ,
        description: "ఉబ్బెత్తు తల మరియు మెల్లగా ఏటవాలుగా ఉండే నుదిటితో దృఢమైన శరీరాన్ని కలిగి ఉంటుంది. ముక్కు ఎగువ దవడ కంటే కొంచెం పొడవుగా దిగువ దవడతో పొడవుగా ఉంటుంది. ఒక ప్రముఖ క్రీజ్ ఉంది. ఫ్లిప్పర్" ,
        size: "పుట్టినప్పుడు పొడవు: 85-112cm, పెద్దల పొడవు: 2.7m, పెద్దల బరువు: 230 Kg" ,
        colour_pattern: "వైపులా లేత బూడిద రంగు కేప్" ,
        dorsal_fin: "డోర్సల్ ఫిన్ విస్తృత పునాదితో పొడవుగా ఉంటుంది" ,
        teeth_count: "ప్రతి దవడలో 21-29 జతల పళ్ళు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "నివాస జనాభా" ,
        habitat_preferance: "సమీప సముద్ర జలాల్లో కనుగొనబడిన భారతీయ జలాల్లో షెల్ఫ్" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "స్టెనెల్లా అటెనువాటా" ,
        image_path: "Pan-Tropical-Spotted-Dolphin" ,
        local_name: "పాన్-ట్రాపికల్ స్పాటెడ్ డాల్ఫిన్" ,
        IUCN_status: "LC" ,
        description: "క్రీజ్" ,
        size: "పుట్టినప్పుడు పొడవు: 90cm, పెద్దల పొడవు: 2.4-2.6m, పెద్దల బరువు: 119 Kg" ,
        colour_pattern: "పాంట్రోపికల్ మచ్చల డాల్ఫిన్" ,
        dorsal_fin: " పొడవాటి, ఫాల్కేట్ డోర్సల్ ఫిన్ మధ్యలో ఉంచబడుతుంది" ,
        teeth_count: "ప్రతి దవడలో 35-40 చిన్న కోణాల దంతాలు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "నివాస జనాభా" ,
        habitat_preferance: "పాన్-ట్రోపికల్ స్పాటెడ్ డాల్ఫిన్" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "స్టెనెల్లా లాంగిరోస్ట్రిస్" ,
        image_path: "Spinner-Dolphin" ,
        local_name: "స్పిన్నర్ డాల్ఫిన్" ,
        IUCN_status: "DD" ,
        description: "మెల్లగా వాలుగా ఉండే నుదుటితో చాలా సన్నని శరీరాన్ని కలిగి ఉంటారు. ఒక మడత ఉంది మరియు ముక్కు చాలా పొడవుగా ఉంది. ఫ్లిప్పర్స్ సన్నగా మరియు సూటిగా ఉంటాయి." ,
        size: "పుట్టినప్పుడు పొడవు: 75-80cm, పెద్దల పొడవు: 1.5-2.3m, పెద్దల బరువు: 82 Kg" ,
        colour_pattern: "పైన బూడిదరంగు నలుపు, లేత బూడిద రంగు బ్యాండ్ ప్రక్కలా నడుస్తుంది మరియు తెల్లటి బొడ్డు (త్రైపాక్షిక నమూనా). కంటి నుండి క్రీజ్ వరకు మరియు కంటి నుండి ఫ్లిప్పర్ వరకు చీకటి కంటి గీత. ఎగువ ముక్కు చీకటిగా ఉంటుంది మరియు దిగువ ముక్కు తెల్లగా ఉంటుంది మరియు ఎగువ ముక్కు నుండి నల్లటి చిట్కా ఉంటుంది." ,
        dorsal_fin: "డోర్సల్ ఫిన్ పొడవుగా, సన్నగా, వెనుక మధ్యలో నిటారుగా ఉంటుంది" ,
        teeth_count: "ప్రతి దవడలో 40-62 జతల దంతాలు ఉంటాయి (మరగుజ్జు స్పిన్నర్ డాల్ఫిన్" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "నివాస జనాభా" ,
        habitat_preferance: "లోతైన ఆఫ్" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "స్టెనెల్లా కొయెరులియోఅల్బా" ,
        image_path: "Striped-Dolphin" ,
        local_name: "చారల డాల్ఫిన్" ,
        IUCN_status: "LC" ,
        description: "శరీరం ఇతర స్టెనెల్లాలా సన్నగా ఉండదు. వారు మృదువుగా వాలుగా ఉన్న నుదురు మరియు మధ్యస్తంగా పొడవైన ముక్కును కలిగి ఉంటారు. ఫ్లిప్పర్స్ సన్నగా మరియు సూటిగా ఉంటాయి మరియు క్రీజ్ ఉంటుంది." ,
        size: "పుట్టినప్పుడు పొడవు: 93-100cn, పెద్దల పొడవు: 2.56m, పెద్దల బరువు: 155 Kg" ,
        colour_pattern: "ముదురు కేప్" ,
        dorsal_fin: "డోర్సాల్ ఫిన్ త్రిభుజాకారంగా ఉండి, వెనుక మధ్య బిందువు వద్ద విశాలమైన ఆధారంతో ఉంటుంది" ,
        teeth_count: "ఒక్కో దవడలో 40-55 జతల దంతాలు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "సముద్రపు లోతైన నీటిలో కనుగొనబడింది" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "డెల్ఫినస్ కాపెన్సిస్ ట్రోపికాలిస్" ,
        image_path: "Indo-Pacific-Common-Dolphin" ,
        local_name: "ఇండో-పసిఫిక్ సాధారణ డాల్ఫిన్" ,
        IUCN_status: "LC" ,
        description: "మెల్లగా ఏటవాలుగా ఉండే నుదురు మరియు ప్రముఖ మడతతో చాలా సన్నని శరీరాన్ని కలిగి ఉంటుంది. అవి చాలా పొడవాటి ముక్కును కలిగి ఉంటాయి మరియు ఫ్లిప్పర్లు పొడవుగా, సన్నగా మరియు సూటిగా ఉంటాయి." ,
        size: "పుట్టినప్పుడు పొడవు: 80-100cm, పెద్దల పొడవు: 2.6m, పెద్దల బరువు: 235 Kg" ,
        colour_pattern: "పైన బూడిదరంగు నలుపు, డోర్సల్ ఫిన్ కింద ప్రముఖ v-ఆకారపు గంట గాజు నమూనా మరియు ఫ్లిప్పర్ పైన పసుపు రంగు బ్లేజ్" ,
        dorsal_fin: "డోర్సల్ ఫిన్ పొడవుగా, సన్నగా, ఫాల్కేట్" ,
        teeth_count: "ఎగువ దవడలో 54-67 జతల దంతాలు మరియు దిగువ దవడలో 52-64 జతల దంతాలు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియదు" ,
        habitat_preferance: "కాంటినెంటల్ షెల్ఫ్ యొక్క లోతైన నీటిలో మరియు వాలుపై, కొన్నిసార్లు తీరానికి సమీపంలో లోతైన నీటిలో కనుగొనబడింది" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "లాగెనోడెల్ఫిస్ హోసీ" ,
        image_path: "Fraser's-Dolphin" ,
        local_name: "ఫ్రేజర్ డాల్ఫిన్" ,
        IUCN_status: "LC" ,
        description: "మెల్లగా వాలుగా ఉండే నుదిటితో, ప్రముఖ మడతతో చాలా బలిష్టమైన శరీరాన్ని కలిగి ఉంటుంది. పుచ్చకాయ మరియు ముక్కు మధ్య. ముక్కు కూడా పొట్టిగా మరియు మొండిగా ఉంటుంది." ,
        size: "పుట్టినప్పుడు పొడవు: 1-1.1m, పెద్దల పొడవు: 2.6-2.7m, పెద్దల బరువు: 210 Kg" ,
        colour_pattern: "గులాబీ బొడ్డు మరియు ముఖం నుండి మలద్వారం వరకు లేత బూడిద రంగు బ్యాండ్" ,
        dorsal_fin: "డోర్సల్ ఫిన్ పొట్టిగా, త్రిభుజాకారంగా మరియు వెనుక మధ్యభాగంలో నిటారుగా ఉంటుంది" ,
        teeth_count: "ప్రతి దవడలో 38-44 జతల దంతాలు ఉంటాయి." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "తెలియని" ,
        habitat_preferance: "సముద్రపు జాతులు లోతైన ఆఫ్" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "నియోఫోకేనా ఫోకెనాయిడ్స్" ,
        image_path: "Indo-Pacific-Finless-Porpoise" ,
        local_name: "ఇండో-పసిఫిక్ ఫిన్" ,
        IUCN_status: "VU" ,
        description: "ఉబ్బెత్తు తల మరియు గుండ్రని ముక్కుతో టార్పెడో ఆకారపు శరీరాన్ని కలిగి ఉంటుంది. ముక్కు లేదు. ఫ్లిప్పర్స్ పొడవుగా మరియు తప్పుడుగా ఉంటాయి. ఫ్లూక్ నోచ్ చేయబడింది." ,
        size: "పుట్టినప్పుడు పొడవు: 75-85cm, పెద్దల పొడవు: 1.5m, పెద్దల బరువు: 60 Kg" ,
        colour_pattern: "ముదురు బూడిద నుండి గోధుమ బూడిద వరకు 10-25 ట్యూబర్" ,
        dorsal_fin: "డోర్సల్ ఫిన్ లేదు" ,
        teeth_count: "ప్రతి దవడలో 15-22 జతల పళ్ళతో స్పేడ్ ఆకారపు పళ్ళు" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "నివాస జనాభా" ,
        habitat_preferance: "సుందర్" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ప్లాటానిస్టా గాంగెటికా" ,
        image_path: "South-Asian-River-Dolphin" ,
        local_name: "దక్షిణ ఆసియా నది డాల్ఫిన్" ,
        IUCN_status: "EN" ,
        description: "దక్షిణాసియా నది డాల్ఫిన్ బలిష్టమైన శరీరం మరియు చదునైన కొనతో పొడవైన సన్నని ముక్కును కలిగి ఉంటుంది. ఆడవారిలో ముక్కు పొడవుగా ఉంటుంది మరియు మగవారిలో చాలా తక్కువగా ఉంటుంది. ముక్కు మరియు పుచ్చకాయ మధ్య ఒక ప్రముఖ మడత ఉంది, పుచ్చకాయపై శిఖరం ఉంటుంది. ఒకే చీలిక బ్లోహోల్" ,
        size: "పుట్టినప్పుడు పొడవు: 70-90cm, పెద్దల పొడవు: 1.6-2.6m, పెద్దల బరువు: 85 Kg" ,
        colour_pattern: "పైభాగం మరియు వెనుక భాగం లేత గోధుమరంగు నుండి గోధుమ బూడిద రంగులో ఉండగా, అండర్" ,
        dorsal_fin: "డోర్సల్ ఫిన్ తక్కువగా, చిన్నగా, త్రిభుజాకారంగా, వెడల్పుగా ఉంటుంది మరియు రోస్ట్రమ్ చిట్కా నుండి 2/3వ వంతు ఉంటుంది" ,
        teeth_count: "ఎగువ దవడలో 26-39 జతల దంతాలు మరియు దిగువ దవడలో 26-35 జతల దంతాలు ఉంటాయి" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "నివాస జనాభా" ,
        habitat_preferance: "సింధు, గంగ, బ్రహ్మపుత్ర, మేఘన మరియు కర్ణఫులి సంగు నదులు మరియు వాటి ఉపనదులలో కనుగొనబడింది. P. g .minor పాకిస్తాన్" ,
        type: "Marine Mammals" ,
    },
]

data.sort((a, b) => a.scientific_name.localeCompare(b.scientific_name))

const d: IDatabaseEntry[] = data.map((e,i) => {
    return {
        id: i.toString(),
        ...e
    }
})

export default d