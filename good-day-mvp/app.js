/* ====================================================
   签文 — 积极正能量 + 心理学白话科普
   ==================================================== */
const FORTUNES = [
  { cat: 'happy', num: 101,
    poem: 'The Spark of Smile', cn: '微笑点燃内啡肽', meaning: '嘴角上扬会触发内啡肽释放，天然的镇痛与愉悦分子。身体比意识更早收到快乐信号。',
    source: '美国·神经科学||沃尔特·坎农（Walter Cannon）'  },
  { cat: 'happy', num: 102,
    poem: 'Laughter Is Medicine', cn: '笑是良药', meaning: '大笑释放内啡肽和血清素，短暂提高免疫球蛋白。十分钟真心大笑，不亚于一次轻运动。',
    source: '美国·心理神经免疫学||李·伯克（Lee Berk）'  },
  { cat: 'happy', num: 103,
    poem: 'Serotonin Boost', cn: '血清素补充', meaning: '阳光、运动和喜欢的食物都能催生血清素。它维持情绪平稳与深度睡眠，是身体自带的稳定剂。',
    source: '人类·神经科学||剑桥大学（University of Cambridge）' },
  { cat: 'happy', num: 104,
    poem: 'Dopamine the Spark', cn: '多巴胺火花', meaning: '期待一件事发生的过程，多巴胺就开始分泌。把生活拆成小期待，快乐不必非要等大事。',
    source: '美国·神经科学||沃尔弗拉姆·舒尔茨（Wolfram Schultz）' },
  { cat: 'happy', num: 105,
    poem: 'Joy Spreads', cn: '快乐传染', meaning: '你笑时，身边人的镜像神经元会被激活。快乐具有天然的传染性，你的开心就是在给周围人充电。',
    source: '意大利·认知神经科学||贾科莫·里佐拉蒂（Giacomo Rizzolatti）' },
  { cat: 'happy', num: 106,
    poem: 'Gratitude Rewires', cn: '感恩重塑大脑', meaning: '每晚记录三件小事，六周后大脑前额叶活动增强。感恩练习是被实证支持的神经训练。',
    source: '美国·积极心理学||罗伯特·埃蒙斯（Robert Emmons）' },
  { cat: 'happy', num: 107,
    poem: 'Peak-End Rule', cn: '峰终定律', meaning: '体验评价由峰值和结束时刻决定。给一天画上温柔的句号，比延长快乐更重要。',
    source: '美国·行为经济学||丹尼尔·卡尼曼（Daniel Kahneman）'  , hidden: true},
  { cat: 'happy', num: 108,
    poem: 'Flow', cn: '心流', meaning: '全神贯注时，大脑会关闭多余的信息通路，焦虑自动静音。专注本身，就是快乐所在。',
    source: '美国·积极心理学||米哈里·契克森米哈赖（Mihaly Csikszentmihalyi）' },
  { cat: 'happy', num: 109,
    poem: 'Touch Some Grass', cn: '去接触自然', meaning: '在公园或绿植旁待二十分钟，压力激素会显著下降。自然光照能同步你的生物钟，增加白天血清素。',
    source: '人类·环境心理学||斯坦福大学（Stanford University）' },
  { cat: 'happy', num: 110,
    poem: 'Move Your Body', cn: '活动身体', meaning: '哪怕只是做十分钟伸展或跳舞，大脑就会分泌多巴胺。身体舒展了，心情就跟着开了一扇窗。',
    source: '美国·运动心理学||美国心理学会（American Psychological Association）' },
  { cat: 'happy', num: 111,
    poem: 'Share a Meal', cn: '分享一顿饭', meaning: '和喜欢的人一起吃顿饭，哪怕只是简单的外卖，激活的社交愉悦回路也远超独处。',
    source: '美国·社会心理学||哈佛大学（Harvard University）' },
  { cat: 'happy', num: 112,
    poem: 'Listen to Music', cn: '听一首歌', meaning: '听喜欢的音乐时，大脑纹状体会释放多巴胺。音乐是性价比最高的情绪调节器。',
    source: '人类·神经科学||麦吉尔大学（McGill University）' },
  { cat: 'happy', num: 113,
    poem: 'Small Goals', cn: '小目标', meaning: '大脑偏爱完成感。把计划拆成今天就能做完的小事，每划掉一个，多巴胺就来一次。',
    source: '美国·行为经济学||普林斯顿大学（Princeton University）' },
  { cat: 'happy', num: 114,
    poem: 'Light Up a Room', cn: '点亮房间', meaning: '窗边晒会太阳，天然蓝光启动血清素分泌。多晒十分钟，好心情自己长出来。',
    source: '人类·神经科学||哈佛医学院（Harvard Medical School）'  },
  { cat: 'happy', num: 115,
    poem: '有朋自远方来不亦乐乎', cn: 'Far friend joy', meaning: '知己的到来，是生命里最直接的喜悦。连接本身，就是快乐的源泉。',
    source: '中国·儒学||《论语·学而》（春秋）', hidden: true  },
  { cat: 'happy', num: 201,
    poem: 'Savor the Moment', cn: '品味此刻', meaning: '快乐时停下来仔细感受十秒以上，大脑会将这段记忆存储得更深。反复回味，快乐会被拉长。',
    source: '美国·积极心理学||弗雷德·布莱恩特（Fred Bryant）' },
  { cat: 'happy', num: 202,
    poem: 'Share the Joy', cn: '分享快乐', meaning: '告诉一个人你的好事，快乐感会翻倍。讲述的过程就是在大脑里重播一次，身体会分泌多巴胺。',
    source: '美国·社会心理学||雪莉·盖布尔（Shelly Gable）' },
  { cat: 'sad', num: 201,
    poem: 'Crying Is Healing', cn: '哭泣疗愈', meaning: '眼泪会带走一部分压力激素，哭泣是生理性的排毒。哭完后的轻盈感，是身体通过眼泪在减压。',
    source: '美国·进化心理学||威廉·弗雷（William Frey）' },
  { cat: 'sad', num: 202,
    poem: 'This too shall pass', cn: '一切都会过去', meaning: '情绪如波浪，有其涨落周期。再艰难的时刻，也不会永远停在同一深度。',
    source: '波斯·谚语||波斯谚语（Persian Proverb）' },
  { cat: 'sad', num: 203,
    poem: '往者不可谏来者犹可追', cn: 'Past gone future yours', meaning: '已经过去的事情无法挽回，未来的日子还来得及把握。别把精力耗在“如果当初”上。',
    source: '中国·儒学||《论语·微子》（春秋）', hidden: true  },
  { cat: 'sad', num: 204,
    poem: 'Vulnerability Is Strength', cn: '脆弱即力量', meaning: '承认难过的人恢复得更快。允许自己像弹簧一样先压缩，才有弹回原状的余地。',
    source: '美国·社会心理学||布琳·布朗（Brené Brown）' },
  { cat: 'sad', num: 205,
    poem: 'Grief Is Natural', cn: '悲伤是自然的', meaning: '悲伤是失去之后的正常生理反应。允许它存在，身体会启动自身的调节机制让它慢慢流走。',
    source: '美国·悲痛研究||大卫·凯斯勒（David Kessler）' },
  { cat: 'sad', num: 206,
    poem: 'You Are Not Alone', cn: '你并不孤单', meaning: '向他人倾诉能显著降低压力激素。被倾听本身就是在为身体减负。',
    source: '美国·社交支持理论||谢尔登·科恩（Sheldon Cohen）' },
  { cat: 'sad', num: 207,
    poem: 'Permission to Feel', cn: '允许感受', meaning: '情绪没有好坏之分，被压抑的才会累积。让它自然流过，比刻意压制更能保护身体。',
    source: '美国·情绪科学||马克·布拉克特（Marc Brackett）' },
  { cat: 'sad', num: 208,
    poem: 'Self-Compassion', cn: '善待自己', meaning: '用安慰朋友的方式对自己说话。自我关怀能加速卸下压力，恢复速度远快于自我苛责。',
    source: '美国·临床心理学||克里斯汀·内夫（Kristin Neff）' },
  { cat: 'sad', num: 209,
    poem: 'Hot Shower Reset', cn: '热水澡重置', meaning: '热水澡舒张血管，提高拥抱激素水平。温热感提醒身体：现在可以放松了。',
    source: '人类·生理学||世界卫生组织（World Health Organization）'  },
  { cat: 'sad', num: 210,
    poem: "Nature's Hug", cn: '自然的拥抱', meaning: '去外面走走，哪怕是看着远处的天空发十分钟呆。换一个场景，会让大脑的“灾难化”自动停止。',
    source: '美国·环境心理学||密歇根大学（University of Michigan）' },
  { cat: 'sad', num: 211,
    poem: 'Soft Blanket', cn: '柔软的毯子', meaning: '窝在柔软的毯子里，触觉上的包裹感会促进拥抱激素分泌，告诉神经系统现在很安全。',
    source: '人类·生理学||加州大学洛杉矶分校（UCLA）' },
  { cat: 'sad', num: 212,
    poem: 'Warm Drink', cn: '一杯温热', meaning: '手上捧一杯温热的水或茶，温度传递到指尖。身体暖和起来，心理的安全感也会随之升温。',
    source: '人类·生理学||世界卫生组织（World Health Organization）' },
  { cat: 'sad', num: 213,
    poem: 'Music Lifts the Heart', cn: '音乐拨动心弦', meaning: '听喜欢的音乐时，大脑纹状体会释放多巴胺。音乐是成本最低、见效最快的情绪调节器。',
    source: '人类·神经科学||麦吉尔大学（McGill University）' },
  { cat: 'sad', num: 214,
    poem: 'Art as Therapy', cn: '艺术即疗愈', meaning: '画画、捏泥、剪贴，动手创作能激活大脑的右半球。色彩和形状，是情绪最诚实的出口。',
    source: '美国·艺术治疗||美国艺术治疗协会（AATA）' },
  { cat: 'sad', num: 215,
    poem: '行到水穷处坐看云起时', cn: 'Water ends clouds rise', meaning: '走到水尽头，不妨坐下来看云升起。绝境处也许正是转机，安静里藏着新的可能。',
    source: '中国·诗学||王维（盛唐）《终南别业》', hidden: true  },
  { cat: 'sad', num: 216,
    poem: 'Après la pluie le beau temps', cn: '雨过天晴',     meaning: '暴风雨过后，总是会有好天气，坏情绪也是。',
    source: '法国·谚语||法国谚语（French Proverb）' },
  { cat: 'sad', num: 301,
    poem: 'Move Your Body', cn: '动起来', meaning: '低落时散步十分钟，血清素就开始回升。身体动起来，情绪会跟着松动，不必等心情好再动。',
    source: '美国·精神医学||约翰·瑞迪（John Ratey）' },
  { cat: 'sad', num: 302,
    poem: 'Write It Out', cn: '写出来', meaning: '连续写十五分钟难过的事，情绪负担会明显减轻。书写让大脑从感受切换到整理模式。',
    source: '美国·心理学||詹姆斯·彭尼贝克（James Pennebaker）' },
  { cat: 'sad', num: 303,
    poem: '云卷云舒', cn: 'Clouds roll clouds pass', meaning: '悲伤时，可以只是安静地坐着，看云慢慢飘过。变化是不变的规律，好心情也会随着云飘回来。',
    source: '中国·道学||《道德经》（春秋）', hidden: true  },
  { cat: 'sad', num: 304,
    poem: '上善若水', cn: 'Highest good like water', meaning: '难过时，想象自己是一滴水。水从不抗拒流动，只是静静地向前走，直到穿过最暗的峡谷。',
    source: '中国·道学||《道德经》（春秋）', hidden: true, _deleted: true  },
  { cat: 'sad', num: 305,
    poem: '岁寒然后知松柏之后凋也', cn: 'Pine endures in winter', meaning: '等到天气寒冷，才知道松柏是最后凋零的。低谷里熬过的时间，都会变成你扎根的力量。',
    source: '中国·儒学||《论语·子罕》（春秋）', hidden: true  },
  { cat: 'angry', num: 301,
    poem: 'Anger Is a Signal', cn: '愤怒是信号', meaning: '愤怒是身体在提示边界受到了触碰。先听懂信号再处理事情，比直接爆发能更有效地保护自己。',
    source: '美国·情绪科学||马克·布拉克特（Marc Brackett）' },
  { cat: 'angry', num: 302,
    poem: 'Name It to Tame It', cn: '命名即驯服', meaning: '告诉自己“我在生气”时，大脑杏仁核的活跃度会下降。识别情绪，就是最有效的降温机制。',
    source: '美国·情绪科学||马克·布拉克特（Marc Brackett）' },
  { cat: 'angry', num: 303,
    poem: 'Ten Deep Breaths', cn: '十个深呼吸', meaning: '肾上腺素是愤怒的燃料，而深呼吸激活副交感神经，让心跳放慢。气头上先呼吸再开口。',
    source: '人类·生理学||美国心脏协会（American Heart Association）' },
  { cat: 'angry', num: 304,
    poem: 'Walk It Off', cn: '行走消气', meaning: '散步加速肾上腺素代谢，愤怒值会随着步数增加而下降。身体动起来，情绪就会减速。',
    source: '美国·运动心理学||运动情绪调节研究（Exercise Research）' },
  { cat: 'angry', num: 305,
    poem: "Express Don't Suppress", cn: '表达而非压抑', meaning: '向值得信任的人表达感受，比闷在心里更能减轻心血管负担。健康的表达本身就是一种保养。',
    source: '美国·健康心理学||情绪表达研究（Emotional Expression）' },
  { cat: 'angry', num: 306,
    poem: 'Boundaries Are Strength', cn: '边界即力量', meaning: '生气常提醒自己被越界的地方。划清界限，本质上是在维护自己未来的平静。',
    source: '美国·心理治疗||内德拉·格洛弗·塔瓦布（Nedra Glover Tawwab）' },
  { cat: 'angry', num: 307,
    poem: 'Turn Anger into Energy', cn: '化怒为力', meaning: '愤怒带来的高唤醒状态可以转化为行动力。去跑步、写作或搬砖，愤怒的能量就能为你所用。',
    source: '美国·运动心理学||芝加哥大学（University of Chicago）' },
  { cat: 'angry', num: 308,
    poem: 'Cool Down Then Speak', cn: '冷静再开口', meaning: '愤怒时大脑供血偏向杏仁核，容易话冲口而出。等皮质醇回落，说出来的话才更接近本意。',
    source: '人类·神经科学||加州大学洛杉矶分校（UCLA）' },
  { cat: 'angry', num: 309,
    poem: 'Shift the Scene', cn: '换一个场景', meaning: '离开让你愤怒的房间，哪怕只是去拿杯水。物理空间的改变，会强行中断愤怒的神经回路。',
    source: '美国·认知行为疗法||贝克认知研究所（Beck Institute）' },
  { cat: 'angry', num: 310,
    poem: 'Cold Water Splash', cn: '冷水泼脸', meaning: '冷水刺激面部会触发“潜水反射”，让心率瞬间减慢。这是生理上最快速的强制冷静法。',
    source: '人类·生理学||美国心脏协会（American Heart Association）' },
  { cat: 'angry', num: 311,
    poem: 'Punch a Pillow', cn: '捶打枕头', meaning: '不能对人发泄，就用物理方式释放肢体紧绷。安全地消耗掉多余能量，情绪就会恢复平衡。',
    source: '美国·运动心理学||美国心理学会（American Psychological Association）' },
  { cat: 'angry', num: 312,
    poem: 'Write the Rant', cn: '写下吐槽', meaning: '把想骂的话全写下来，不发给任何人。写完就撕掉，情绪从大脑转移到纸张，身体就轻松了。',
    source: '美国·心理学||詹姆斯·彭尼贝克（James Pennebaker）' },
  { cat: 'angry', num: 313,
    poem: '止怒莫若诗', cn: 'Poetry calms anger', meaning: '平息怒气最好的方法，是吟诗或写诗，让冲动的情绪流进字句里，代替拳头和争吵。',
    source: '中国·哲学||《管子》（先秦）', hidden: true  },
  { cat: 'angry', num: 313,
    poem: '知止而后有定', cn: 'Stop then stability', meaning: '愤怒起于片刻，若能在最初察觉它，就不会被它推着走。知道什么时候停下，才是力量的开始。',
    source: '中国·儒学||《大学》（先秦）', hidden: true  },
  { cat: 'angry', num: 314,
    poem: 'Ira furor brevis est', cn: '愤怒是短暂的疯狂',     meaning: '愤怒来去匆匆，若不在它最猛烈时做决定，伤害会小很多。',
    source: '古罗马·诗学||贺拉斯（Horace）' , hidden: true},
  { cat: 'angry', num: 401,
    poem: 'Pause Before You Act', cn: '行动前暂停', meaning: '愤怒的生理高峰只持续九十秒。撑过这三秒，身体就开始降温。这是比说任何话都管用的倒计时。',
    source: '人类·神经科学||吉尔·博尔特·泰勒（Jill Bolte Taylor）' },
  { cat: 'angry', num: 402,
    poem: 'Reframe the Story', cn: '换一个角度', meaning: '生气时你只看到一种可能。试着问自己：还有没有别的解释？换个说法，怒气值就会下降。',
    source: '美国·认知心理学||阿尔伯特·艾利斯（Albert Ellis）' },
  { cat: 'anxious', num: 401,
    poem: 'Anxiety Is a Signal', cn: '焦虑是信号', meaning: '适度焦虑是大脑在提醒“有重要的事需要准备”。一点紧张，是你在乎这件事的生理证据。',
    source: '美国·行为心理学||耶克斯与多德森定律（Yerkes-Dodson Law）' },
  { cat: 'anxious', num: 402,
    poem: 'Best Tension', cn: '最佳紧张', meaning: '耶克斯-多德森定律表明，中等焦虑时表现最优。焦虑本身是引擎，不一定需要被消除。',
    source: '美国·心理学||罗伯特·耶克斯（Robert Yerkes）' },
  { cat: 'anxious', num: 403,
    poem: 'Five-Minute Start', cn: '先做五分钟', meaning: '大脑畏惧困难，但行动能中断这种思维循环。先动五分钟，焦虑的燃料就会断供。',
    source: '美国·行为心理学||斯坦福大学（Stanford University）' },
  { cat: 'anxious', num: 404,
    poem: 'Box Breathing', cn: '箱式呼吸', meaning: '吸气四秒、屏息四秒、呼气四秒。三分钟后心率自然回落，压力激素下降。',
    source: '美国·呼吸训练||美国海军海豹突击队（Navy SEALs）' },
  { cat: 'anxious', num: 405,
    poem: 'Mindfulness the Pause', cn: '正念暂停', meaning: '焦虑永远指向未来，只有此刻是安全的。通过呼吸将注意力拉回当下，大脑就能停止空转。',
    source: '美国·认知神经科学||乔·卡巴金（Jon Kabat-Zinn）' },
  { cat: 'anxious', num: 406,
    poem: 'Courage Walks with Fear', cn: '勇气与恐惧同行', meaning: '大胆的人也有焦虑，只是带着它继续前进。心跳加速和紧张兴奋，共享同一条生理通路。',
    source: '美国·存在心理学||罗洛·梅（Rollo May）' },
  { cat: 'anxious', num: 407,
    poem: 'The Now Is Safe', cn: '此刻安全', meaning: '扫描身体当下的感受：周围没有实际威胁，你正在被此刻稳稳托住。',
    source: '美国·认知行为疗法||美国焦虑与抑郁协会（ADAA）' , hidden: true},
  { cat: 'anxious', num: 408,
    poem: 'Growth over Panic', cn: '成长胜过恐慌', meaning: '将“我做不到”替换为“我还没做到”，压力激素会显著降低。大脑喜欢开放题而非死局。',
    source: '美国·发展心理学||卡罗尔·德韦克（Carol Dweck）' },
  { cat: 'anxious', num: 409,
    poem: 'Drop Your Shoulders', cn: '放下肩膀', meaning: '焦虑时先做一件事：把肩膀从耳边降下来。肌肉紧张会欺骗大脑继续报警，松开身体也是松开情绪。',
    source: '人类·生理学||哈佛医学院（Harvard Medical School）' },
  { cat: 'anxious', num: 410,
    poem: 'Look Out the Window', cn: '看看窗外', meaning: '望向远方，让视线离开屏幕。开阔的视野会降低大脑的警报级别，让眼睛和神经都休息。',
    source: '美国·认知科学||普林斯顿大学（Princeton University）' },
  { cat: 'anxious', num: 411,
    poem: 'Grounding 5-4-3-2-1', cn: '感官着陆', meaning: '看5样、摸4样、听3样、闻2样、尝1样。感官回到地面，焦虑就无法起飞。',
    source: '美国·临床心理学||美国心理学会（American Psychological Association）'  },
  { cat: 'anxious', num: 412,
    poem: 'Decaf Switch', cn: '少喝咖啡因', meaning: '焦虑期减少咖啡因摄入，能降低中枢神经的过度兴奋。暂时退出刺激，有助于系统恢复平静。',
    source: '人类·生理学||约翰霍普金斯大学（Johns Hopkins University）' },
  { cat: 'anxious', num: 413,
    poem: 'Ball Games Clear the Mind', cn: '球类清空大脑', meaning: '打羽毛球或篮球时，大脑必须全神贯注盯球。运动让认知资源被占满，焦虑自然没有空间。',
    source: '人类·运动心理学||美国运动医学会（ACSM）' },
  { cat: 'anxious', num: 414,
    poem: 'Sweat It Out', cn: '流汗排解', meaning: '一次高强度的有氧运动，能快速代谢体内的压力激素。让汗流出来，烦恼就跟着流走了。',
    source: '美国·运动科学||哈佛医学院（Harvard Medical School）' },
  { cat: 'anxious', num: 415,
    poem: '心无挂碍', cn: 'No attachment no fear', meaning: '心里没有牵挂和阻碍，也就没有恐惧。把担忧暂时放下，本身就是一种勇敢。',
    source: '中国·佛学||《般若波罗蜜多心经》（唐代）', hidden: true  },
  { cat: 'anxious', num: 501,
    poem: 'Ground Your Senses', cn: '回到感官', meaning: '焦虑时找到五样能看到的、四样能摸到的、三样能听到的。感官回到此刻，大脑就没有空去预演未来。',
    source: '美国·临床心理学||美国心理学会（American Psychological Association）'  , hidden: true},
  { cat: 'anxious', num: 502,
    poem: 'Worry Window', cn: '担忧窗口', meaning: '每天固定留二十分钟专门焦虑，时间一到就停。把担忧装进固定时段，它就会变成可控任务。',
    source: '美国·认知行为疗法||宾夕法尼亚大学（University of Pennsylvania）' },
  { cat: 'lonely', num: 501,
    poem: 'Lonely Is the Body Crying', cn: '孤独是身体在呼喊', meaning: '孤独是身体发出的“寻找连接”的信号，如同饥饿提醒你吃饭。这是健康且自然的生存本能。',
    source: '美国·社会神经科学||约翰·卡乔波（John Cacioppo）' , hidden: true},
  { cat: 'lonely', num: 502,
    poem: 'One Small Hello', cn: '一个小问候', meaning: '哪怕只是和快递员或收银员说一句话，孤独感也会下降。微小的连接同样在给心脏供氧。',
    source: '美国·社会心理学||加州大学伯克利分校（UC Berkeley）' },
  { cat: 'lonely', num: 503,
    poem: 'Reach Out First', cn: '先伸出手', meaning: '主动发出一条消息，身体便会分泌拥抱激素。孤独惧怕的是迈出第一步的犹豫。',
    source: '美国·神经经济学||保罗·扎克（Paul Zak）' },
  { cat: 'lonely', num: 504,
    poem: 'Company of Others', cn: '有人陪伴', meaning: '即使在同处一个空间没有深入交流，共同的记忆和同一种笑声也能降低皮质醇水平。',
    source: '美国·社会支持研究||杨百翰大学（Brigham Young University）' },
  { cat: 'lonely', num: 505,
    poem: 'Alone is a Charge', cn: '独处是充电', meaning: '独处不等于孤独，把独处当成恢复精力，身体会修得更快。真正的孤独，是没能好好陪伴自己。',
    source: '英国·心理学||安东尼·斯托尔（Anthony Storr）' },
  { cat: 'lonely', num: 506,
    poem: "A Pet's Warmth", cn: '宠物的温暖', meaning: '撸猫狗十分钟，拥抱激素上升，压力激素下降。有时最亲近的连结，来自另一双不同的眼睛。',
    source: '美国·人与动物研究||密苏里大学（University of Missouri）' },
  { cat: 'lonely', num: 507,
    poem: 'Small Circle Deep Bonds', cn: '小圈子深连接', meaning: '两三个谈得来的人就足以提供能量。关系的质量比数量更能抵御孤独感。',
    source: '美国·心理学研究||罗伊·鲍迈斯特（Roy Baumeister）' },
  { cat: 'lonely', num: 508,
    poem: 'Belonging is Built', cn: '归属靠建造', meaning: '加入一个小组或学习一个爱好，人就会慢慢融入。归属感是用脚步一步步走出来的。',
    source: '美国·社会心理学||罗伊·鲍迈斯特（Roy Baumeister）' },
  { cat: 'lonely', num: 509,
    poem: 'Join a Gym Class', cn: '参加健身课', meaning: '集体运动中，大脑分泌社交性拥抱激素。和陌生人一起流汗，也是一种连接。',
    source: '人类·社会心理学||密歇根大学（University of Michigan）'  },
  { cat: 'lonely', num: 510,
    poem: 'Go to a Cafe', cn: '去咖啡馆坐坐', meaning: '什么都不做，待在有人声的咖啡馆。周围人的存在本身就会降低孤独感，这是最低成本的陪伴。',
    source: '美国·环境心理学||加州大学洛杉矶分校（UCLA）' },
  { cat: 'lonely', num: 511,
    poem: 'Cozy Podcast', cn: '听播客陪伴', meaning: '戴上耳机听别人聊天的播客，大脑会把它当成一次自然社交。人声能安抚孤独的神经回路。',
    source: '美国·心理学||斯坦福大学（Stanford University）' },
  { cat: 'lonely', num: 512,
    poem: 'Call a Family Member', cn: '给家人打电话', meaning: '熟悉的声音会激活大脑中安全感相关的记忆，哪怕只是闲聊五分钟。血脉的底层连接很难被切断。',
    source: '人类·社会心理学||哈佛大学（Harvard University）' },
  { cat: 'lonely', num: 513,
    poem: '举头望明月低头思故乡',     cn: 'Moon gaze home longing', meaning: '孤独的夜晚，抬头看看月亮。无论你在哪里，月光都会温柔地照着你。这是一种跨越时空的陪伴。',
    source: '中国·诗学||李白（盛唐）《静夜思》', hidden: true  },
  { cat: 'lonely', num: 514,
    poem: 'No man is an island', cn: '没有人是一座孤岛', meaning: '英国诗人多恩的经典名言。每个人的生命都与他人息息相关，你总会找到那个连接你的港湾。',
    source: '英国·文学||约翰·多恩（John Donne）' , hidden: true},
  { cat: 'lonely', num: 601,
    poem: 'Join Something Small', cn: '加入小事', meaning: '每周固定参加一个活动，哪怕是线上读书会。重复见面是建立归属感最快的方式。',
    source: '美国·社会学||罗伊·鲍迈斯特（Roy Baumeister）' },
  { cat: 'lonely', num: 602,
    poem: 'Write a Letter', cn: '写一封信', meaning: '想一个很久没联系的人，发一段话出去。主动迈出一步，连接就重新启动，身体会回报拥抱激素。',
    source: '美国·社会神经科学||斯坦福大学（Stanford University）' },
  { cat: 'calm', num: 601,
    poem: 'Parasympathetic Reset', cn: '副交感重置', meaning: '平静时身体进入修复模式：心率变慢、消化加强、免疫活跃。平静是身体最划算的投资。',
    source: '人类·生理学||自主神经系统研究（Autonomic Research）' },
  { cat: 'calm', num: 602,
    poem: 'Mindfulness Works', cn: '正念有效', meaning: '每天十分钟正念，几周后杏仁核变小，前额叶增强。大脑的“火警”反应会越来越小。',
    source: '美国·认知神经科学||乔·卡巴金（Jon Kabat-Zinn）' },
  { cat: 'calm', num: 603,
    poem: 'Slow Down Repair', cn: '慢下来修复', meaning: '紧张时修复机制停摆，平静时身体才开始修墙。慢一点，是给身体发送修复信号。',
    source: '人类·生理学||世界卫生组织（World Health Organization）' },
  { cat: 'calm', num: 604,
    poem: 'One Minute One Breath', cn: '一呼一吸', meaning: '缓慢呼气比吸气长两拍，心率会自动下降。身体先平静下来，心就会跟着平稳。',
    source: '人类·生理学||哈佛大学（Harvard University）' },
  { cat: 'calm', num: 605,
    poem: 'The Present is Peace', cn: '此刻即安宁', meaning: '此刻没有需要追赶的，也没有需要解释的。把心放回眼前，焦虑将没有立足之地。',
    source: '美国·认知神经科学||美国心理学会（American Psychological Association）' },
  { cat: 'calm', num: 606,
    poem: 'Calm Deepens Sleep', cn: '平静深化睡眠', meaning: '睡前十五分钟放空，褪黑素顺畅分泌，睡眠会变深。睡好觉，第二天的负担会轻很多。',
    source: '睡眠科学||美国睡眠医学学会（American Academy of Sleep Medicine）' },
  { cat: 'calm', num: 607,
    poem: 'Peace is a Practice', cn: '平静是练习', meaning: '大脑的平静路径越练越粗。每天一小段安静时光，就是对神经系统进行刻意练习。',
    source: '美国·神经科学||加州大学伯克利分校（UC Berkeley）' },
  { cat: 'calm', num: 608,
    poem: 'Flow', cn: '心流', meaning: '紧张做不出好东西，平静可以。静下来，创造力才有空间生长。',
    source: '美国·积极心理学||米哈里·契克森米哈赖（Mihaly Csikszentmihalyi）' },
  { cat: 'calm', num: 609,
    poem: 'Body Scan', cn: '扫描身体', meaning: '从头到脚逐个部位感受紧张与松弛，五分钟就能激活副交感神经。身体松了，心就会跟着稳。',
    source: '美国·正念减压||乔·卡巴金（Jon Kabat-Zinn）' },
  { cat: 'calm', num: 610,
    poem: 'Nature Reset', cn: '自然重置', meaning: '在绿地待二十分钟，皮质醇水平就会明显下降。自然是最省钱的神经系统修复器。',
    source: '美国·环境心理学||密歇根大学（University of Michigan）' },
  { cat: 'calm', num: 611,
    poem: 'Gentle Stretch', cn: '轻柔拉伸', meaning: '睡前做十分钟温和的拉伸，肌肉的放松信号会传递到大脑。身体柔软了，神经也会跟着松弛。',
    source: '人类·生理学||哈佛医学院（Harvard Medical School）' },
  { cat: 'calm', num: 612,
    poem: 'Write a Gratitude Line', cn: '写下一句感恩', meaning: '睡前写下今天发生的一个小美好，大脑会把注意力锚定在正面信息上，帮助你带着暖意入睡。',
    source: '美国·积极心理学||罗伯特·埃蒙斯（Robert Emmons）' },
  { cat: 'calm', num: 613,
    poem: '知止而后有定', cn: 'Stop then stability', meaning: '知道要达到的境界，才能有坚定的方向。不随外物沉浮，内心的宁静才是真正的归宿。',
    source: '中国·儒学||《大学》（先秦）', hidden: true  },
  { cat: 'calm', num: 613,
    poem: '行到水穷处坐看云起时', cn: 'Water ends clouds rise', meaning: '走到水的尽头，不妨坐下来看云升起。绝境处也许正是转机，安静里藏着新的可能。',
    source: '中国·诗学||王维（盛唐）《终南别业》', hidden: true  },
  { cat: 'calm', num: 614,
    poem: '静水流深', cn: 'Still water deep', meaning: '水面最安静的地方，往往藏得最深。真正的力量，总是在最沉静的时候积蓄。',
    source: '中国·道学||《道德经》（春秋）', hidden: true  },
  { cat: 'calm', num: 614,
    poem: '心无挂碍', cn: 'No attachment no fear', meaning: '心里没有牵挂和阻碍，也就没有恐惧。把担忧暂时放下，本身就是一种勇敢。',
    source: '中国·佛学||《般若波罗蜜多心经》（唐代）', hidden: true  },
  { cat: 'calm', num: 615,
    poem: '本来无一物何处惹尘埃', cn: 'Nothing where dust lands?', meaning: '烦恼像尘埃，起风时漫天飞舞，风停后自然落地。不必执念，不必清扫，看它落下就好。',
    source: '中国·禅学||《六祖坛经》（唐代）', hidden: true  },
  { cat: 'calm', num: 615,
    poem: '大音希声', cn: 'Greatest sound is silence', meaning: '最高级的声响，反而听不见声音。最平静的状态，不需要语言去解释，静静感受就好。',
    source: '中国·道学||《道德经》（春秋）', hidden: true  },
  { cat: 'calm', num: 701,
    poem: 'Grounding Breath', cn: '接地呼吸', meaning: '把注意力放在脚底接触地面的感觉，配合缓慢呼吸。脚稳了，情绪的根也就稳了。',
    source: '美国·认知神经科学||加州大学洛杉矶分校（UCLA）' },
  { cat: 'calm', num: 702,
    poem: 'Blue Sky Gazing', cn: '凝视蓝天', meaning: '抬头凝视三十秒蓝天，视线开阔会降低大脑警报。天空那么大，你的烦恼装得下。',
    source: '人类·环境心理学||普林斯顿大学（Princeton University）' },
  { cat: 'happy', num: 703,
    poem: '一期一会', cn: 'One life one meeting',     meaning: '此生此世，此刻的相遇只此一次。认真对待眼前人，幸福就藏在不可重复的瞬间。',
    source: '日本·茶道||千利休（Sen no Rikyū）' , hidden: true},
  { cat: 'happy', num: 704,
    poem: 'La joie vient de petits choses', cn: '喜悦藏于小事',     meaning: '生活中的微小确幸比大事件更能持续滋养内心，一杯咖啡、一缕阳光就足够。',
    source: '法国·谚语||法国谚语（French Proverb）' , hidden: true},
  { cat: 'sad', num: 703,
    poem: '七転び八起き', cn: '跌倒七次起身八次',     meaning: '悲伤和挫折不是终点，每一次站起来都在重建神经回路，身体会记住你恢复的力量。',
    source: '日本·谚语||日本谚语（Japanese Proverb）' , hidden: true},
  { cat: 'sad', num: 704,
    poem: 'Und dies wird vorübergehen', cn: '这一切终将过去',     meaning: '再深的悲伤也有保质期，大脑的情绪回路会自行修复，时间是最好的缓冲带。',
    source: '德国·谚语||德国谚语（German Proverb）' },
  { cat: 'angry', num: 703,
    poem: 'Der Zorn ist ein kurzer Wahnsinn', cn: '愤怒是短暂的疯狂',     meaning: '愤怒的生理高峰只有九十秒，忍过这一刻，理性就会回来。',
    source: '德国·谚语||德国谚语（German Proverb）' , hidden: true},
  { cat: 'angry', num: 704,
    poem: '怒りは身を滅ぼす', cn: '怒气毁自身',     meaning: '愤怒时血压飙升、血管收缩，长期积怒会损害心血管。及时释怀，是给身体最好的保护。',
    source: '日本·谚语||日本谚语（Japanese Proverb）', hidden: true },
  { cat: 'anxious', num: 703,
    poem: 'Sorgen machen graue Haare', cn: '忧虑催人老', meaning: '长期焦虑加速细胞老化，压力激素让头发变白。放下担忧，就是给身体按下暂停键。',
    source: '德国·谚语||德国谚语（German Proverb）' , hidden: true},
  { cat: 'anxious', num: 704,
    poem: '心配事は大抵起こらない', cn: '担心的事大多不会发生', meaning: '大脑为应对威胁预演灾难，但绝大多数忧虑从未实现。别让虚构的未来消耗此刻。',
    source: '日本·谚语||日本谚语（Japanese Proverb）'  , hidden: true},
  { cat: 'anxious', num: 705,
    poem: "Qui s'inquiète mal vit", cn: '忧虑者难安',     meaning: '焦虑会偷走当下的氧气，让你在安全的环境中也无法呼吸。学着把注意力从未来拉回此刻。',
    source: '法国·谚语||法国谚语（French Proverb）'  , hidden: true},
  { cat: 'lonely', num: 703,
    poem: '一人で歩く道も、やがては誰かと交わる', cn: '独行之路终会与人交汇',     meaning: '孤独是阶段性的，不是永久的。你走过的每一步，都在靠近那个愿意与你同行的人。',
    source: '日本·谚语||日本谚语（Japanese Proverb）' , hidden: true},
  { cat: 'lonely', num: 704,
    poem: 'Ein Freund ist jemand der die Melodie in dir kennt und sie dir vorsingt wenn du sie vergessen hast', cn: '朋友是那个记得你内心旋律的人',     meaning: '真正的连接不在于数量，而在于有人了解你内心的节奏。被理解，是孤独最深处的解药。',
    source: '德国·谚语||德国谚语（German Proverb）', hidden: true  },
  { cat: 'calm', num: 703,
    poem: 'Stille ist die höchste Form der Kraft', cn: '静默是最高形式的力量',     meaning: '安静时大脑进入修复模式，压力激素下降，免疫细胞活跃。沉默不是空虚，是给身体充电。',
    source: '德国·谚语||德国谚语（German Proverb）', hidden: true  },
  { cat: 'calm', num: 704,
    poem: 'Ruhig Blut klarer Kopf', cn: '心静则智明',     meaning: '情绪平稳时前额叶皮层最活跃，判断力和创造力都会提升。冷静不只是态度，是大脑的最佳工作状态。',
    source: '德国·谚语||德国谚语（German Proverb）'  , hidden: true},
  { cat: 'calm', num: 705,
    poem: 'در سکوت، خدا حرف میزند', cn: '静默中自有回响',     meaning: '安静不是空白，是内心秩序的重建。在沉默中，身体会找到自己的节奏。',
    source: '波斯·谚语||波斯谚语（Persian Proverb）'  , hidden: true},
  { cat: 'happy', num: 705,
    poem: 'Dum vivimus vivamus', cn: '活着就要好好活',     meaning: '生命短暂，尽情享受当下。快乐不需要理由，活着本身就是最好的理由。',
    source: '古罗马·哲学||伊壁鸠鲁（Epicurus）', hidden: true, _deleted: true  },
  { cat: 'happy', num: 706,
    poem: 'La vida es bella', cn: '生活是美好的',     meaning: '即使身处逆境，也要学会发现美。大脑在感恩时释放多巴胺，让快乐成为日常习惯。',
    source: '西班牙·谚语||西班牙谚语（Spanish Proverb）'  , hidden: true},
  { cat: 'happy', num: 707,
    poem: 'जीवन एक उत्सव है', cn: '生命是一场庆典',     meaning: '活着本身就值得庆祝，每一次心跳都是身体给你的礼物。',
    source: '印度·谚语||印度谚语（Indian Proverb）'  , hidden: true},
  { cat: 'sad', num: 706,
    poem: 'Anche la notte più bua ha una fine', cn: '最暗的夜也有尽头',     meaning: '悲伤不会永驻，大脑的杏仁核会随时间自我调节，黎明总会到来。',
    source: '意大利·谚语||意大利谚语（Italian Proverb）' , hidden: true},
  { cat: 'sad', num: 707,
    poem: 'Утро вечера мудренее', cn: '早晨比夜晚更清醒',     meaning: '夜晚的悲伤到了清晨往往会减轻，睡眠能重置情绪回路，让大脑重新出发。',
    source: '俄罗斯·谚语||俄罗斯谚语（Russian Proverb）' , hidden: true},
  { cat: 'sad', num: 708,
    poem: 'La tristesse dure plus que la joie', cn: '悲伤比快乐更持久',     meaning: '悲伤停留更久，正因如此快乐弥足珍贵。大脑记住快乐瞬间，低谷时调用这些记忆。',
    source: '法国·谚语||法国谚语（French Proverb）'  , hidden: true},
  { cat: 'angry', num: 705,
    poem: 'La colera è cattiva consigliera', cn: '愤怒是坏军师',     meaning: '愤怒时前额叶被抑制，决策质量骤降。等愤怒的生理高峰过去再行动，是对自己最好的保护。',
    source: '意大利·谚语||意大利谚语（Italian Proverb）'  , hidden: true},
  { cat: 'angry', num: 706,
    poem: 'Гнев — враг человека', cn: '愤怒是人的敌人',     meaning: '愤怒攻击的是自己的身体，血压升高、心跳加速。放下怒气，就是保护自己的心脏。',
    source: '俄罗斯·谚语||俄罗斯谚语（Russian Proverb）'  , hidden: true},
  { cat: 'angry', num: 707,
    poem: 'الغضب يبدأ بجنون وينتهي بندم', cn: '怒气始于愚者终于悔',     meaning: '愤怒让人做出后悔的决定。忍过九十秒的生理高峰，理性就会回来掌舵。',
    source: '阿拉伯·谚语||阿拉伯谚语（Arabic Proverb）' , hidden: true},
  { cat: 'anxious', num: 706,
    poem: 'O que há de ser será', cn: '该来的终会来',     meaning: '焦虑是对未来的恐惧，但大部分担忧从未发生。把注意力拉回此刻，身体会跟着放松。',
    source: '葡萄牙·谚语||葡萄牙谚语（Portuguese Proverb）' , hidden: true},
  { cat: 'anxious', num: 707,
    poem: 'Kavmiko seme mwen kontan', cn: '少担忧多安心',     meaning: '担忧偷走当下的平静，深呼吸能激活副交感神经，让身体从紧张模式切换到休息模式。',
    source: '海地·谚语||海地谚语（Haitian Proverb）'  , hidden: true},
  { cat: 'anxious', num: 708,
    poem: 'Il meglio è nemico del bene', cn: '追求完美反伤已有',     meaning: '完美主义是焦虑的温床，接受「足够好」能让大脑松一口气，降低皮质醇水平。',
    source: '意大利·谚语||意大利谚语（Italian Proverb）' , hidden: true},
  { cat: 'lonely', num: 705,
    poem: 'La solitude est la patrie des forts', cn: '孤独是强者的故乡',     meaning: '独处时大脑进入默认模式网络，创造力与自我认知都会提升。孤独不是缺失，是另一种丰盛。',
    source: '法国·文学||阿尔贝·加缪（Albert Camus）' , hidden: true},
  { cat: 'lonely', num: 706,
    poem: 'الواحد لا يستقل', cn: '独行者未必孤单',     meaning: '一个人行走也能走得远，内心丰富的人不会因独处而枯萎。',
    source: '阿拉伯·谚语||阿拉伯谚语（Arabic Proverb）'  , hidden: true},
  { cat: 'lonely', num: 707,
    poem: 'Stilstand ist auch eine Bewegung', cn: '静止也是一种运动',     meaning: '在孤独中静下来，身体在默默修复。不急于寻找陪伴，也是一种对自己的善待。',
    source: '德国·哲学||德国谚语（German Proverb）' , hidden: true},
  { cat: 'calm', num: 706,
    poem: '知足は他にあらず、自分の心にありけれ', cn: '知足在己心',     meaning: '平静不依赖外物，大脑在满足感中释放血清素，让内心安定如水。',
    source: '日本·文学||鸭长明（Kamo no Chōmei）'  , hidden: true},
  { cat: 'calm', num: 707,
    poem: 'Qui ne s\'agite point ne se trompe point', cn: '不急则不误',     meaning: '急躁时容易犯错，慢下来让前额叶重新掌舵，身体和决策都会感谢你。',
    source: '法国·谚语||法国谚语（French Proverb）', hidden: true  },
  { cat: 'calm', num: 708,
    poem: 'Aquietarse es sabiduría', cn: '安静是智慧',     meaning: '安静不是无所作为，是给大脑留出空间去整合信息。沉默中做出的决定，往往比冲动时更明智。',
    source: '西班牙·谚语||西班牙谚语（Spanish Proverb）'  , hidden: true},
];

const CAT_LABEL = {
  study:        '学 习',
  work:         '工 作',
  confidence:   '自 信',
  action:       '行 动',
  relationship: '关 系',
  selfcare:     '自 己',
};

const STORAGE_KEY = 'sisterSign.history.v1';

const state = {
  currentSign: null,
  history: [],
  isDrawing: false,
  lastCountry: null,  // 上次抽到的国家，用于国家轮换
};

/* ====================================================
   语料库安全拦截器
   渲染前校验文本长度，过长自动跳过换抽
   ==================================================== */
function isSignSafe(sign) {
  if (!sign) return false;
  // 已销毁的卡片
  if (sign._deleted) return false;
  // 用户手动隐藏
  if (sign.hidden) return false;
  // 文本长度安全阈值
  const poemIsCjk = /[\u4e00-\u9fff\u3040-\u30ff]/.test(sign.poem || '');
  const cnIsAscii = /^[\x00-\x7F\s]+$/.test(sign.cn || '');
  // 外文主题词超 35 字符 → 危险
  if (!poemIsCjk && (sign.poem || '').length > 35) return false;
  // 中文副题是英文翻译且超 10 字符 → 危险
  if (cnIsAscii && (sign.cn || '').length > 10) return false;
  // 释义超 45 字符 → 危险
  if ((sign.meaning || '').length > 45) return false;
  return true;
}

/* 从语料 source 字段提取国家名（取 '||' 前的「国家·领域」中的国家部分）*/
function getCountry(sign) {
  if (!sign.source) return 'unknown';
  const part = sign.source.split('||')[0];
  return part.split('·')[0].trim();
}

/* 国家轮换抽取：连续两次抽取的卡片必须来自不同国家
    - 任意牌 pickSign / 情绪牌 pickSignByMood 共用 state.lastCountry
    - 优先从「非上次国家」池中抽取
    - 若候选池全为同一国家（无法规避），才允许同国家，但尽量少出现 */
function pickSign() {
  const safePool = FORTUNES.filter(f => isSignSafe(f));
  // 如果有上次国家记录，先尝试从不同国家的卡片中抽取
  if (state.lastCountry) {
    const diffPool = safePool.filter(f => getCountry(f) !== state.lastCountry);
    if (diffPool.length > 0) {
      const pick = diffPool[Math.floor(Math.random() * diffPool.length)];
      state.lastCountry = getCountry(pick);
      return pick;
    }
  }
  // 退化：全池随机（仅当 diffPool 为空，即池内全是同一国家时）
  const pick = safePool[Math.floor(Math.random() * safePool.length)];
  state.lastCountry = getCountry(pick);
  return pick;
}

/* 情绪 → 推荐签分类（情绪签：与身体/神经/激素相关的正向科普） */
const MOOD_CATS = {
  happy:   ['happy'],
  sad:     ['sad'],
  angry:   ['angry'],
  anxious: ['anxious'],
  lonely:  ['lonely'],
  calm:    ['calm'],
};

function pickSignByMood(mood) {
  const cats = MOOD_CATS[mood] || null;
  if (!cats) return pickSign();
  const pool = FORTUNES.filter(f => cats.includes(f.cat) && isSignSafe(f));
  if (!pool.length) return pickSign();
  // 国家轮换：优先从与上次不同的国家中抽取
  if (state.lastCountry) {
    const diffPool = pool.filter(f => getCountry(f) !== state.lastCountry);
    if (diffPool.length > 0) {
      const pick = diffPool[Math.floor(Math.random() * diffPool.length)];
      state.lastCountry = getCountry(pick);
      return pick;
    }
    // 该情绪池内所有卡片均为上次国家 → 跨池随机（保证国家不重复优先于情绪）
    const safePool = FORTUNES.filter(f => isSignSafe(f));
    const globalDiff = safePool.filter(f => getCountry(f) !== state.lastCountry);
    if (globalDiff.length > 0) {
      const pick = globalDiff[Math.floor(Math.random() * globalDiff.length)];
      state.lastCountry = getCountry(pick);
      return pick;
    }
  }
  // 退化：同情绪池内随机（仅当无任何其他国家的卡片可选时）
  const pick = pool[Math.floor(Math.random() * pool.length)];
  state.lastCountry = getCountry(pick);
  return pick;
}

function isAscii(str) {
  return /^[\x00-\x7F\s]+$/.test(str);
}

/* ====================================================
   日期 + 天气感知 — 显示「2026/08/19 · 晴 28℃」
   天气优先取 localStorage 手动设置；无则用本地时间推算季节天气
   ==================================================== */
const WEATHER_ICONS = {
  sun: '☀️', cloud: '☁️', rain: '🌧️', snow: '❄️', fog: '🌫️',
  thunder: '⛈️', wind: '💨', moon: '🌙', star: '✨'
};

function getSeasonWeather() {
  // 根据月份 + 时段给一个温和的默认天气（无需联网、离线可用）
  const d = new Date();
  const mon = d.getMonth() + 1;
  const h = d.getHours();
  if (mon >= 3 && mon <= 5)  return { icon: 'sun',  label: '晴' };
  if (mon >= 6 && mon <= 8)  return { icon: h >= 18 || h < 6 ? 'moon' : 'sun',  label: '晴' };
  if (mon >= 9 && mon <= 11) return { icon: 'sun',  label: '晴' };
  return { icon: h >= 18 || h < 6 ? 'moon' : 'sun', label: '晴' };
}

function getWeatherText() {
  const saved = localStorage.getItem('sisterSign.weather');
  if (saved) {
    try {
      const w = JSON.parse(saved);
      if (w && w.label) return w;
    } catch (e) {}
  }
  return getSeasonWeather();
}

function formatDateLine() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  const y = d.getFullYear(), m = pad(d.getMonth() + 1), day = pad(d.getDate());
  const wd = ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
  return `${y}/${m}/${day} 周${wd}`;
}

function formatWeatherLine() {
  const w = getWeatherText();
  const icon = WEATHER_ICONS[w.icon] || WEATHER_ICONS.sun;
  const temp = localStorage.getItem('sisterSign.temperature');
  const tempStr = temp ? ` · ${temp}℃` : '';
  return `${icon} ${w.label}${tempStr}`;
}

function renderSign(sign) {
  // 主题词视觉标准（66 张旧卡片）：
  //   大标题 = 银色发光衬线（英文）或 银色发光宋体（中文诗）→ 34px/700/italic + shimmer
  //   副题   = 浅紫宋体（中文）或 浅紫衬线（英文翻译）→ clamp(24px,6vw,34px)
  // 中文字符判定：包含 CJK 统一表意文字且不含日文假名（平假名/片假名）才算中文
  // 日文汉字虽在 CJK 范围内，但含假名 → 视为外文，中文翻译 cn 放上方
  const poemIsCn = /[\u4e00-\u9fff]/.test(sign.poem) && !/[\u3040-\u30ff]/.test(sign.poem);
  // 中文诗 → 银白大标题样式（宋体）；英文诗 → 银白衬线大标题样式
  const poemClass = poemIsCn ? 'sign-poem sign-poem-cn' : 'sign-poem english';
  const joinSegs = (segs, useBr = false) => segs.map(seg => `<span class="seg">${seg}</span>`)
    .join(useBr ? '<br>' : (segs.some(sg => /[\x00-\x7F]/.test(sg)) ? ' ' : '\u200B'));  // 中文段用零宽空格连接，提供视觉节点但不渲染空隙
  // 中文短句（≤10字）不拆分，整体交给 CSS text-wrap:balance 自然换行
  const poemHtml = poemIsCn
    ? `<span class="skew-wrap">${joinSegs(smartSegments(escapeHtml(sign.poem), 10, false, true), true)}</span>`
    : joinSegs(smartSegments(escapeHtml(sign.poem), 9, !poemIsCn, true), true);
  // cn 行：数据层已彻底清除逗号，UI 层不再需要二次处理
  const cnIsAscii = sign.cn && /[\x00-\x7F]/.test(sign.cn);
  const cnClean = cnIsAscii ? escapeHtml(sign.cn) : sign.cn;
  const cnLine = sign.cn
    ? `<p class="${cnIsAscii ? 'sign-cn-en' : 'sign-cn'}">${cnIsAscii ? cnClean : `<span class="skew-wrap">${joinSegs(smartSegments(escapeHtml(sign.cn), 20, false, true), true)}</span>`}</p>`
    : '';
  const literalLine = sign.literal
    ? `<p class="sign-literal"><span class="skew-wrap">${joinSegs(smartSegments(escapeHtml(sign.literal), 5))}</span></p>`
    : '';
  const meaningHtml = joinSegs(smartSegments(escapeHtml(sign.meaning), 16));
  const sourceHtml = sign.source
    ? (() => {
        const parts = sign.source.split('||');
        let html = '<span class="source-line">— ' + parts[0] + '</span>';
        if (parts[1]) html += '<span class="source-line">' + parts[1] + '</span>';
        return html;
      })()
    : '';
  return `
    <div class="sign-meta">
      <span class="sign-date">${formatDateLine()}</span>
      <span class="sign-weather">${formatWeatherLine()}</span>
      <span class="sign-brand">今朝·Good day</span>
    </div>
    <div class="sign-content">
      <div class="sign-top">
        ${poemIsCn
          ? `<p class="${poemClass}">${poemHtml}</p>\n        ${cnLine}`
          : `${cnLine}\n        <p class="${poemClass}">${poemHtml}</p>`}
        ${literalLine}
      </div>
      <div class="sign-mid">
        <p class="sign-meaning">${meaningHtml}</p>
      </div>
      <div class="sign-bottom">
        ${sign.source ? `<p class="sign-source">${sourceHtml}</p>` : ''}
      </div>
    </div>
  `;
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}


/* 智能断行：把长文本切成「语义段」，
   每段 inline-block 不换行，整段放不下才整体换到下一行，
   保证括号、单词、短句不被拆成两半。
   - 中文：按句末标点断句；过长无标点段再按字数拆
   - 英文：按空格断词（词不拆），逗号/句号后也断开 */
function smartSegments(text, maxCn = 9, keepSpace = false, stripComma = false) {
  if (!text) return [];
  const segs = [];
  let cur = '';
  const flush = () => {
    const t = cur.trim();
    if (t) {
      // 纯标点段（如「。」「—」）并入前一段，避免孤立符号占一行
      if (!/[a-zA-Z0-9\u4e00-\u9fff]/.test(t) && segs.length > 0) {
        segs[segs.length - 1] += t;
      } else if (/[\u4e00-\u9fff]/.test(t) && t.length > maxCn && !/[，。！？、；：]/.test(t)) {
        // 短句（≤ maxCn+5）整体成段，交给 CSS text-wrap:balance 自然换行
        if (t.length <= maxCn + 5) {
          segs.push(t);
        } else {
          const breakers = ['需要', '就是', '也是', '就能', '才是', '没有', '还有', '我们', '成为'];
          let cutAt = -1;
          for (const b of breakers) {
            const idx = t.indexOf(b, 4);
            if (idx > 0 && idx < t.length - 2 && idx <= maxCn) { cutAt = idx; break; }
          }
          if (cutAt > 0) {
            segs.push(t.slice(0, cutAt));
            segs.push(t.slice(cutAt));
          } else {
            // 循环切分：避免最后一段只有 1 个字（孤字）
            let i = 0;
            while (i < t.length) {
              let end = Math.min(i + maxCn, t.length);
              // 若剩余恰好 1 个字，把上一段末尾的 1 个字挪到本段，保证本段 ≥ 2 字
              if (t.length - i === 1 && segs.length > 0) {
                const last = segs[segs.length - 1];
                if (last.length > 1) {
                  segs[segs.length - 1] = last.slice(0, -1);
                } else {
                  segs.pop();
                }
                end = i + 1;
              }
              segs.push(t.slice(i, end));
              i = end;
            }
          }
        }
      } else {
        // 过短段（1-2字中文）并入前段，避免孤立单字占一行
        if (segs.length > 0 && /[\u4e00-\u9fff]/.test(t) && t.length <= 2 && !/[，。！？、；：]/.test(t)) {
          segs[segs.length - 1] += t;
        } else {
          segs.push(t);
        }
      }
    }
    cur = '';
  };
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    // 「·」与两侧空格保留（如 美国 · 孔子），不拆散
    if (ch === '·') { cur += ch; continue; }
    if (ch === '（' || ch === '(') {
      const close = text.indexOf(ch === '（' ? '）' : ')', i + 1);
      if (close > -1) {
        // 括号段与括号前累积的内容合并为完整一段（避免括号被拆两半）
        const full = cur + text.slice(i, close + 1);
        if (full.trim()) segs.push(full.trim());
        cur = '';
        i = close;
        continue;
      }
    }
    // 软断点：逗号/顿号/冒号 → 断行
    if (/[，、：,]/.test(ch)) {
      if (stripComma) {
        // 英文(keepSpace)：逗号 → 空格替代，不强制断行（保持英文句子连贯）
        // 中文：逗号 → 不显示，直接断行（第二句另起一行）
        if (keepSpace) { cur += ' '; continue; }
        flush();
        continue;
      }
      cur += ch;
      flush();
      continue;
    }
    cur += ch;
    if (ch === ' ') {
      // 纯标点累积（如「—」开头）不因空格打断，继续与后文合并
      const curTrim = cur.trim();
      if (curTrim && !/[a-zA-Z0-9\u4e00-\u9fff]/.test(curTrim)) continue;
      // keepSpace（英文签诗）：空格已由 cur += ch 累积，仅按标点断句，避免逐词竖排
      if (keepSpace) { continue; }
      flush(); continue;
    }
    // 硬断点：句末标点（。！？；）→ 保证句子完整换行
    if (/[。！？；!?;]/.test(ch)) { flush(); continue; }
    if (ch === '.') {
      const next = text[i + 1];
      if (next === undefined || next === ' ') { flush(); continue; }
    }
  }
  flush();
  return segs;
}

function drawSign(mood) {
  if (state.isDrawing) return;
  state.isDrawing = true;
  hideHome();   // 抽签后隐藏情绪泡泡

  const card  = document.getElementById('card');
  const drawBtn = document.getElementById('draw-btn');
  const wand  = document.getElementById('wand');
  if (drawBtn) drawBtn.disabled = true;

  if (navigator.vibrate) {
    try { navigator.vibrate(40); } catch(e) {}
  }

  // 魔法棒叩击水面：涟漪扩散 → 片刻后牌面翻开（不再摇晃）
  if (wand) {
    wand.classList.remove('tap-wave');
    void wand.offsetWidth;  // 强制重绘以重新触发动画
    wand.classList.add('tap-wave');
  }

  // 触发水面涟漪波纹
  const ripple = document.getElementById('water-ripple');
  if (ripple) {
    ripple.classList.remove('active');
    void ripple.offsetWidth;
    ripple.classList.add('active');
  }

  setTimeout(() => {
    if (wand) wand.classList.remove('tap-wave');
    card.classList.remove('shaking');
    let sign;
    if (state.qa2Mode) {
      sign = state.qa2List[state.qa2Index];
      if (!sign) { state.isDrawing = false; return; }
    } else {
      sign = mood ? pickSignByMood(mood) : pickSign();
    }
    state.currentSign = sign;

    const back = document.getElementById('face-back');
    back.innerHTML = renderSign(sign);
    card.classList.add('flipped');

    // 显示卡片外的返回提示（翻转后才出现，无fadeUp延迟，不跳闪）
    const hint = document.getElementById('back-hint');
    if (hint) hint.classList.add('visible');

    bindResultEvents();

    setTimeout(() => {
      state.isDrawing = false;
      if (drawBtn) drawBtn.disabled = false;
      addToHistory(sign);
    }, 700);
  }, 560);
}

function resetCard() {
  if (state.isDrawing) return;
  const card = document.getElementById('card');
  card.classList.remove('flipped');
  state.currentSign = null;
  // 隐藏卡片外的返回提示（翻回首页时隐藏）
  const hint = document.getElementById('back-hint');
  if (hint) hint.classList.remove('visible');
  showHome();
}

/* 返回首页：显示情绪泡泡 */
function showHome() {
  const bubbles = document.getElementById('mood-bubbles');
  if (bubbles) bubbles.classList.remove('hidden');
  setMeteorMode('sparse');
}

/* 抽签后：隐藏情绪泡泡 */
function hideHome() {
  const bubbles = document.getElementById('mood-bubbles');
  if (bubbles) bubbles.classList.add('hidden');
  setMeteorMode('dense');
}

function bindResultEvents() {
  // 小红书版：去除复制/返回首页按钮，点击卡片背面即可返回
  const back = document.getElementById('face-back');
  if (back) {
    back.onclick = function(e) {
      if (e.target.closest('a, button')) return;
      if (state.qa2Mode) return;
      resetCard();
    };
  }
}

function copySign() {
  const s = state.currentSign;
  if (!s) return;
  const lines = [];
  lines.push(`【${formatDateLine()} ${formatWeatherLine()}】`);
  lines.push('');
  if (s.poem) lines.push(s.poem);
  if (s.cn) lines.push(`（${s.cn}）`);
  if (s.literal) lines.push(`（${s.literal}）`);
  lines.push('');
  if (s.meaning) lines.push(`*${s.meaning}`);
  if (s.tip) lines.push(`*${s.tip}`);
  if (s.source) lines.push(`—— ${s.source.replace('||', '\n   ')}`);
  lines.push('');
  lines.push('《今朝·Good day》');
  const text = lines.join('\n');

  fallbackCopy(text);
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  showToast('请长按选择文字复制');
  setTimeout(function() { if (ta.parentNode) document.body.removeChild(ta); }, 5000);
}

function addToHistory(sign) {
  state.history = state.history.filter(h => h.poem !== sign.poem);
  state.history.unshift({ ...sign, time: Date.now() });
  state.history = state.history.slice(0, 3);
  saveHistory();
}

function loadHistory() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) state.history = JSON.parse(saved);
  } catch (e) {}
}

function saveHistory() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history));
  } catch (e) {}
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

/* ====================================================
   全量测试模式：URL 带 ?showall=true 时
   隐藏正常 UI，以长列表展示所有语料供审查
   ==================================================== */
function checkShowAllMode() {
  const params = new URLSearchParams(location.search);
  if (params.get('showall') !== 'true') return false;
  return true;
}

function renderShowAll() {
  // 隐藏正常 UI
  const elements = ['#card', '#mood-bubbles', '#water-ripple', '#back-hint', '#wand', '#wand-label', '#meteor-container'];
  elements.forEach(sel => { const el = document.querySelector(sel); if (el) el.style.display = 'none'; });
  const drawBtn = document.getElementById('draw-btn');
  if (drawBtn) drawBtn.style.display = 'none';

  // 构建长列表
  const container = document.createElement('div');
  container.id = 'showall-container';
  container.style.cssText = 'max-width:820px;margin:0 auto;padding:24px 16px 60px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;';

  const title = document.createElement('h1');
  title.textContent = '今朝·Good day 语料全量审查';
  title.style.cssText = 'font-size:22px;font-weight:700;margin:0 0 8px;color:#333;';
  container.appendChild(title);

  const summary = document.createElement('p');
  const safe = FORTUNES.filter(f => isSignSafe(f)).length;
  const hidden = FORTUNES.filter(f => f.hidden).length;
  summary.textContent = `总计 ${FORTUNES.length} 条 · 可抽取 ${safe} 条 · 隐藏 ${hidden} 条`;
  summary.style.cssText = 'font-size:14px;color:#888;margin:0 0 24px;';
  container.appendChild(summary);

  FORTUNES.forEach((sign, i) => {
    const card = document.createElement('div');
    const isHidden = !!sign.hidden;
    const isSafe = isSignSafe(sign);
    card.style.cssText = `border:1px solid ${isHidden ? '#e74c3c' : (isSafe ? '#d4c5e8' : '#f0ad4e')};border-radius:12px;padding:16px;margin-bottom:12px;background:${isHidden ? '#fff5f5' : '#fff'};`;

    const header = document.createElement('div');
    header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;';
    const num = document.createElement('span');
    num.textContent = `#${i + 1} [${sign.cat}] ${sign.num}`;
    num.style.cssText = 'font-size:12px;color:#999;font-weight:600;';
    const status = document.createElement('span');
    if (isHidden) {
      status.textContent = 'HIDDEN';
      status.style.cssText = 'font-size:11px;color:#fff;background:#e74c3c;padding:2px 8px;border-radius:4px;font-weight:700;';
    } else if (isSafe) {
      status.textContent = 'OK';
      status.style.cssText = 'font-size:11px;color:#fff;background:#27ae60;padding:2px 8px;border-radius:4px;font-weight:700;';
    } else {
      status.textContent = 'RISK';
      status.style.cssText = 'font-size:11px;color:#fff;background:#f0ad4e;padding:2px 8px;border-radius:4px;font-weight:700;';
    }
    header.appendChild(num);
    header.appendChild(status);
    card.appendChild(header);

    const fields = [
      ['poem', sign.poem],
      ['cn', sign.cn],
      ['literal', sign.literal],
      ['meaning', sign.meaning],
      ['source', sign.source],
    ];
    fields.forEach(([label, val]) => {
      if (!val) return;
      const line = document.createElement('div');
      line.style.cssText = 'font-size:14px;line-height:1.6;margin:2px 0;';
      const lbl = document.createElement('strong');
      lbl.textContent = label + ': ';
      lbl.style.cssText = 'color:#7b6ba5;min-width:60px;display:inline-block;';
      const txt = document.createElement('span');
      txt.textContent = val;
      if (label === 'poem' || label === 'cn') txt.style.fontWeight = '600';
      line.appendChild(lbl);
      line.appendChild(txt);
      card.appendChild(line);
    });

    container.appendChild(card);
  });

  // 替换 app 内容（页面用 class="app" 而非 id="app"）
  const app = document.querySelector('.app');
  if (app) {
    app.style.cssText = 'background:#f8f6fb;min-height:100vh;display:block !important;';
    app.innerHTML = '';
    app.appendChild(container);
  } else {
    // 如果找不到 .app，直接添加到 body
    document.body.innerHTML = '';
    document.body.appendChild(container);
  }
  // 隐藏 header（slogan 区）
  const header = document.querySelector('.header');
  if (header) header.style.display = 'none';
  const meteor = document.querySelector('.meteor-container');
  if (meteor) meteor.style.display = 'none';
  const toast = document.getElementById('toast');
  if (toast) toast.style.display = 'none';
  document.body.style.background = '#f8f6fb';
  document.title = '语料审查 · 今朝·Good day';
  return true;
}

function init() {
  // 强制移动端从顶端开始，防止地址栏收起时自动偏移滚动
  window.scrollTo(0, 0);
  // 全量测试模式优先
  if (checkShowAllMode()) {
    renderShowAll();
    return;
  }
  // 人工审核模式（旧版，保留兼容）
  if (checkReviewMode()) {
    renderReviewMode();
    return;
  }
  loadHistory();
  const drawBtn = document.getElementById('draw-btn');
  if (drawBtn) drawBtn.addEventListener('click', drawSign);
  const wand = document.getElementById('wand');
  if (wand) wand.addEventListener('click', drawSign);
  // 魔法棒下方文字也可点击抽卡
  const wandLabel = document.getElementById('wand-label');
  if (wandLabel) wandLabel.addEventListener('click', (e) => {
    e.stopPropagation();
    drawSign();
  });

  // 情绪入口：点击推荐对应签文
  const bubbles = document.getElementById('mood-bubbles');
  if (bubbles) {
    bubbles.querySelectorAll('.mood-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        drawSign(chip.dataset.mood);
      });
    });
  }

  // 第二阶段审核模式：在正常预览界面之上叠加两个临时按钮
  if (checkQa2Mode()) {
    setupQa2();
  }
}

/* ====================================================
   人工视觉质检台（review 模式）
   ?review=true 进入：逐张渲染真实卡片，人工判断好坏
   - 顶部进度条：已检查 XX / 总 XX
   - 每张卡片：真实预览效果 + 「没问题」/「有问题请隐藏」按钮
   - 决策存 localStorage，刷新不丢失
   ==================================================== */
const REVIEW_KEY = 'sisterSign.review.hidden.v4';
// v4：强制清空旧版审核记录，每次进入审核模式必须从第1张开始，不允许跳过已审核过的卡片

function checkReviewMode() {
  const params = new URLSearchParams(location.search);
  return params.get('review') === 'true';
}

function loadReviewHidden() {
  try {
    const saved = localStorage.getItem(REVIEW_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) { return {}; }
}

function saveReviewHidden(map) {
  try { localStorage.setItem(REVIEW_KEY, JSON.stringify(map)); } catch (e) {}
}

/* 唯一标识一张卡片 */
function signKey(sign) {
  return sign.cat + '/' + sign.num + '/' + sign.poem;
}

function renderReviewMode() {
  // 隐藏正常 UI
  const elements = ['#card', '#mood-bubbles', '#water-ripple', '#back-hint', '#wand', '#wand-label', '#meteor-container', '#categories'];
  elements.forEach(sel => { const el = document.querySelector(sel); if (el) el.style.display = 'none'; });
  const header = document.querySelector('.header');
  if (header) header.style.display = 'none';
  const meteor = document.querySelector('.meteor-container');
  if (meteor) meteor.style.display = 'none';
  const toast = document.getElementById('toast');
  if (toast) toast.style.display = 'none';

  // 强制从第1张开始：每次进入审核模式，清空 localStorage 中的审核记录
  // 用户要求：每次审核必须从头到尾亲自看一遍，不允许自动跳过
  localStorage.removeItem(REVIEW_KEY);
  const hiddenMap = {};
  // 注意：所有卡片一律从第 1 张开始，由人工逐张确认。
  // 语料库中已有 hidden:true 标记的卡片（超长/高危）不在此处自动计入已处理，
  // 是否隐藏完全由人工在审核中决定。进度从 0 开始。

  const app = document.querySelector('.app');
  if (!app) return;
  app.style.cssText = 'background:#f4f1fa;min-height:100vh;display:block !important;';
  document.body.style.background = '#f4f1fa';
  document.body.style.overflow = 'auto';
  document.title = '人工审核 · 今朝·Good day';
  app.innerHTML = '';

  // 顶部工具栏
  const bar = document.createElement('div');
  bar.id = 'review-bar';
  bar.style.cssText = 'position:sticky;top:0;z-index:50;background:rgba(244,241,250,0.92);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid rgba(184,164,220,0.35);padding:12px 16px;';
  const barInner = document.createElement('div');
  barInner.style.cssText = 'max-width:560px;margin:0 auto;display:flex;flex-direction:column;gap:8px;';

  const barTop = document.createElement('div');
  barTop.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:8px;';
  const titleEl = document.createElement('div');
  titleEl.style.cssText = 'font-size:16px;font-weight:700;color:#4a3f6b;font-family:-apple-system,"PingFang SC",sans-serif;';
  titleEl.textContent = '人工视觉质检台';
  const backBtn = document.createElement('button');
  backBtn.textContent = '← 返回首页';
  backBtn.style.cssText = 'padding:6px 14px;font-size:13px;font-family:-apple-system,"PingFang SC",sans-serif;color:#6C52A8;background:rgba(255,255,255,0.7);border:1px solid rgba(184,164,220,0.5);border-radius:999px;cursor:pointer;';
  backBtn.addEventListener('click', () => { window.location.search = ''; });
  barTop.appendChild(titleEl);
  barTop.appendChild(backBtn);

  const progressWrap = document.createElement('div');
  progressWrap.style.cssText = 'width:100%;';
  const progressText = document.createElement('div');
  progressText.style.cssText = 'font-size:13px;color:#7b6ba5;font-family:-apple-system,"PingFang SC",sans-serif;margin-bottom:4px;';
  progressText.id = 'review-progress-text';
  const progressTrack = document.createElement('div');
  progressTrack.style.cssText = 'width:100%;height:8px;background:rgba(184,164,220,0.25);border-radius:999px;overflow:hidden;';
  const progressFill = document.createElement('div');
  progressFill.id = 'review-progress-fill';
  progressFill.style.cssText = 'height:100%;width:0%;background:linear-gradient(90deg,#9b7ede,#6C52A8);border-radius:999px;transition:width 0.35s ease;';
  progressTrack.appendChild(progressFill);
  progressWrap.appendChild(progressText);
  progressWrap.appendChild(progressTrack);
  barInner.appendChild(barTop);
  barInner.appendChild(progressWrap);

  // 全部完成提示 + 导出按钮（初始隐藏）
  const doneBox = document.createElement('div');
  doneBox.id = 'review-done-box';
  doneBox.style.cssText = 'display:none;background:rgba(108,82,168,0.10);border:1px solid rgba(108,82,168,0.3);border-radius:12px;padding:10px 14px;text-align:center;';
  const doneText = document.createElement('div');
  doneText.style.cssText = 'font-size:13px;color:#6C52A8;font-family:-apple-system,"PingFang SC",sans-serif;margin-bottom:8px;';
  doneText.id = 'review-done-text';
  const exportBtn = document.createElement('button');
  exportBtn.textContent = '📋 复制隐藏清单（发给 AI 生成纯净版）';
  exportBtn.style.cssText = 'padding:8px 16px;font-size:13px;font-family:-apple-system,"PingFang SC",sans-serif;color:#fff;background:#6C52A8;border:none;border-radius:999px;cursor:pointer;';
  exportBtn.addEventListener('click', () => {
    const hiddenList = [];
    FORTUNES.forEach(f => {
      if (f._deleted) return;  // 已销毁的不再出现在清单里
      const k = signKey(f);
      if (hiddenMap[k]) hiddenList.push(`[${f.cat}/${f.num}] ${f.poem}`);
    });
    const text = '需要隐藏的卡片清单：\n' + (hiddenList.join('\n') || '(无)');
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.cssText = 'position:fixed;top:50%;left:50%;width:300px;height:200px;transform:translate(-50%,-50%);z-index:9999;opacity:0.9;';
    document.body.appendChild(ta); ta.select();
    showToast('请长按选择文字复制');
    setTimeout(function() { if (ta.parentNode) document.body.removeChild(ta); }, 8000);
  });
  doneBox.appendChild(doneText);
  doneBox.appendChild(exportBtn);
  barInner.appendChild(doneBox);
  bar.appendChild(barInner);
  app.appendChild(bar);

  // 卡片区（单卡切换：点「没问题/有问题」后立即切换下一张，无动效）
  const listWrap = document.createElement('div');
  listWrap.style.cssText = 'max-width:560px;margin:0 auto;padding:20px 16px 80px;display:flex;flex-direction:column;gap:16px;';

  // 审核列表：排除已销毁(_deleted)和已隐藏(hidden:true)的卡片
  // 隐藏卡片已封存到独立文件夹，不再出现在审核列表
  const reviewList = FORTUNES.filter(f => !f._deleted && !f.hidden);
  const total = reviewList.length;
  let processed = 0;
  let currentIdx = 0; // 当前展示的卡片在 reviewList 中的下标（跳过已决策的）

  const updateProgress = () => {
    processed = 0;
    reviewList.forEach(f => { if (hiddenMap[signKey(f)] !== undefined) processed++; });
    const pct = Math.round(processed / total * 100);
    progressText.textContent = `审核进度：已处理 ${processed} / ${total}（剩余 ${total - processed} 张）`;
    progressFill.style.width = pct + '%';
    if (processed >= total) {
      doneBox.style.display = 'block';
      const hiddenCount = reviewList.filter(f => hiddenMap[signKey(f)]).length;
      doneText.textContent = `🎉 全部 ${total} 张已审核完毕！共标记 ${hiddenCount} 张需要隐藏。点击下方按钮复制清单。`;
    }
  };

  // 找到下一张未决策的卡片下标；若没有则返回 -1
  const nextUndecided = (from) => {
    for (let i = from; i < total; i++) {
      if (hiddenMap[signKey(reviewList[i])] === undefined) return i;
    }
    return -1;
  };

  const showCard = (idx) => {
    listWrap.innerHTML = '';
    if (idx < 0) { updateProgress(); return; }  // 全部审完
    const fn = reviewList[idx];
    const k = signKey(fn);
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;gap:10px;';

    // 卡片编号条
    const info = document.createElement('div');
    info.style.cssText = 'display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#9a8bbf;font-family:-apple-system,"PingFang SC",sans-serif;';
    const num = document.createElement('span');
    num.textContent = `#${idx + 1} / ${total}  [${fn.cat}] ${fn.num}`;
    info.appendChild(num);
    wrap.appendChild(info);

    // 真实卡片渲染：与正常模式完全一致的 DOM 结构（sign-card-outer > sign-face back），确保字体/样式渲染一致
    const cardHost = document.createElement('div');
    cardHost.style.cssText = 'position:relative;width:100%;max-width:320px;margin:0 auto;';
    cardHost.innerHTML = `<div class="sign-card-outer" style="position:relative;width:100%;max-width:min(92vw,320px);height:558px;transform-style:preserve-3d;"><div class="sign-face back" style="backface-visibility:visible;transform:none;">${renderSign(fn)}</div></div>`;
    const innerActions = cardHost.querySelector('.actions');
    if (innerActions) innerActions.remove();
    wrap.appendChild(cardHost);

    // 操作按钮：点击后立即记录并切换到下一张，无任何动效
    const btns = document.createElement('div');
    btns.style.cssText = 'display:flex;gap:10px;justify-content:center;';

    const okBtn = document.createElement('button');
    okBtn.textContent = '✓ 这张没问题';
    okBtn.style.cssText = 'flex:1;max-width:180px;padding:10px 0;font-size:14px;font-family:-apple-system,"PingFang SC",sans-serif;color:#7e60c0;background:#fff;border:1.5px solid rgba(122,95,192,0.35);border-radius:999px;cursor:pointer;';
    okBtn.addEventListener('click', () => {
      hiddenMap[k] = false;
      saveReviewHidden(hiddenMap);
      updateProgress();
      showCard(nextUndecided(idx + 1));
    });

    const badBtn = document.createElement('button');
    badBtn.textContent = '✕ 这张有问题，请隐藏';
    badBtn.style.cssText = 'flex:1;max-width:180px;padding:10px 0;font-size:14px;font-family:-apple-system,"PingFang SC",sans-serif;color:#fff;background:#c0392b;border:none;border-radius:999px;cursor:pointer;';
    badBtn.addEventListener('click', () => {
      hiddenMap[k] = true;
      saveReviewHidden(hiddenMap);
      updateProgress();
      showCard(nextUndecided(idx + 1));
    });

    btns.appendChild(okBtn);
    btns.appendChild(badBtn);
    wrap.appendChild(btns);
    listWrap.appendChild(wrap);
    // 页面顶部固定不动，无需滚动（单卡视图本身很矮）
  };

  updateProgress();
  app.appendChild(listWrap);
  showCard(nextUndecided(0));
  return true;
}

/* ====================================================
   第二阶段审核（qa2 模式）
   ?qa2=true 进入：在正常预览界面之上叠加两个临时审核按钮
   - 不创建新页面，不隐藏任何正常 UI 元素
   - 卡片翻转走 drawSign() 完整动效链（魔法棒叩击→涟漪→560ms延迟→翻转）
   - PC/手机端进度独立（按屏宽区分 localStorage key）
   ==================================================== */
const QA2_KEY_PREFIX = 'sisterSign.qa2.';

function checkQa2Mode() {
  const params = new URLSearchParams(location.search);
  return params.get('qa2') === 'true';
}

function getQa2StorageKey() {
  return QA2_KEY_PREFIX + (window.innerWidth < 768 ? 'mobile' : 'desktop');
}

function setupQa2() {
  // 强制清空 localStorage，每次从第1张开始
  localStorage.removeItem(getQa2StorageKey());

  const qa2Map = {};
  const reviewList = FORTUNES.filter(f => !f._deleted && !f.hidden);
  const total = reviewList.length;

  // 设置审核状态
  state.qa2Mode = true;
  state.qa2List = reviewList;
  state.qa2Index = 0;
  state.qa2Map = qa2Map;
  state.qa2Total = total;

  // 隐藏首页的情绪按钮和魔法棒文字（审核模式下不需要手动抽卡）
  const moodBubbles = document.getElementById('mood-bubbles');
  if (moodBubbles) moodBubbles.style.display = 'none';
  const wandLabel = document.getElementById('wand-label');
  if (wandLabel) wandLabel.style.display = 'none';

  // 修改魔法棒文字提示
  const wand = document.getElementById('wand');
  if (wand) {
    // 隐藏魔法棒图标（审核模式自动抽卡，不需要手动点）
    wand.style.display = 'none';
  }

  // 创建审核工具栏（固定在底部，不遮挡卡片）
  const bar = document.createElement('div');
  bar.id = 'qa2-bar';
  bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:50;background:rgba(244,241,250,0.92);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-top:1px solid rgba(184,164,220,0.3);padding:10px 16px;box-sizing:border-box;';
  const barInner = document.createElement('div');
  barInner.style.cssText = 'max-width:560px;margin:0 auto;display:flex;flex-direction:column;gap:6px;';

  // 进度行
  const progressRow = document.createElement('div');
  progressRow.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:8px;';
  const progressText = document.createElement('span');
  progressText.id = 'qa2-progress-text';
  progressText.style.cssText = 'font-size:12px;color:#7b6ba5;font-family:-apple-system,"PingFang SC",sans-serif;';
  progressText.textContent = `0 / ${total}`;
  const deviceTag = document.createElement('span');
  deviceTag.style.cssText = 'font-size:11px;color:#9a8bbf;font-family:-apple-system,"PingFang SC",sans-serif;background:rgba(184,164,220,0.15);padding:2px 8px;border-radius:999px;';
  deviceTag.textContent = window.innerWidth < 768 ? '手机端' : 'PC端';
  progressRow.appendChild(progressText);
  progressRow.appendChild(deviceTag);

  // 进度条
  const progressTrack = document.createElement('div');
  progressTrack.style.cssText = 'width:100%;height:4px;background:rgba(184,164,220,0.2);border-radius:999px;overflow:hidden;';
  const progressFill = document.createElement('div');
  progressFill.id = 'qa2-progress-fill';
  progressFill.style.cssText = 'height:100%;width:0%;background:linear-gradient(90deg,#9b7ede,#6C52A8);border-radius:999px;transition:width 0.3s ease;';
  progressTrack.appendChild(progressFill);

  // 按钮行
  const btnRow = document.createElement('div');
  btnRow.style.cssText = 'display:flex;gap:10px;justify-content:center;';

  const okBtn = document.createElement('button');
  okBtn.textContent = '✔ 没问题（下一张）';
  okBtn.style.cssText = 'flex:1;max-width:200px;padding:10px 0;font-size:14px;font-family:-apple-system,"PingFang SC",sans-serif;color:#7e60c0;background:#fff;border:1.5px solid rgba(122,95,192,0.35);border-radius:999px;cursor:pointer;';

  const badBtn = document.createElement('button');
  badBtn.textContent = '✘ 有问题（隐藏）';
  badBtn.style.cssText = 'flex:1;max-width:200px;padding:10px 0;font-size:14px;font-family:-apple-system,"PingFang SC",sans-serif;color:#fff;background:#c0392b;border:none;border-radius:999px;cursor:pointer;';

  btnRow.appendChild(okBtn);
  btnRow.appendChild(badBtn);

  barInner.appendChild(progressRow);
  barInner.appendChild(progressTrack);
  barInner.appendChild(btnRow);
  bar.appendChild(barInner);
  document.body.appendChild(bar);

  // 给页面底部留出空间避免被工具栏遮挡
  document.body.style.paddingBottom = '140px';

  const updateProgress = () => {
    let processed = 0;
    reviewList.forEach(f => { if (qa2Map[signKey(f)] !== undefined) processed++; });
    const pct = Math.round(processed / total * 100);
    progressText.textContent = `${processed} / ${total}`;
    progressFill.style.width = pct + '%';
  };

  // 自动抽第一张卡（走 drawSign 完整动效链）
  setTimeout(() => { drawSign(); }, 300);

  okBtn.addEventListener('click', () => {
    if (state.isDrawing) return;
    const currentSign = state.currentSign;
    if (currentSign) {
      qa2Map[signKey(currentSign)] = false;
      saveQa2Map(qa2Map);
    }
    updateProgress();
    // 找下一张
    state.qa2Index++;
    if (state.qa2Index >= total) {
      // 全部审完
      showQa2Done();
      return;
    }
    // 先翻回正面，再触发 drawSign 走完整动效
    const card = document.getElementById('card');
    card.classList.remove('flipped');
    const hint = document.getElementById('back-hint');
    if (hint) hint.classList.remove('visible');
    setTimeout(() => { drawSign(); }, 400);
  });

  badBtn.addEventListener('click', () => {
    if (state.isDrawing) return;
    const currentSign = state.currentSign;
    if (currentSign) {
      qa2Map[signKey(currentSign)] = true;
      saveQa2Map(qa2Map);
    }
    updateProgress();
    state.qa2Index++;
    if (state.qa2Index >= total) {
      showQa2Done();
      return;
    }
    const card = document.getElementById('card');
    card.classList.remove('flipped');
    const hint = document.getElementById('back-hint');
    if (hint) hint.classList.remove('visible');
    setTimeout(() => { drawSign(); }, 400);
  });

  function showQa2Done() {
    // 移除工具栏
    const barEl = document.getElementById('qa2-bar');
    if (barEl) barEl.remove();
    // 隐藏卡片
    const card = document.getElementById('card');
    if (card) { card.classList.remove('flipped'); card.style.display = 'none'; }
    const hint = document.getElementById('back-hint');
    if (hint) hint.classList.remove('visible');
    // 显示完成提示
    const stage = document.querySelector('.stage');
    if (stage) {
      const doneBox = document.createElement('div');
      doneBox.style.cssText = 'text-align:center;padding:40px 20px;';
      const doneText = document.createElement('div');
      doneText.style.cssText = 'font-size:16px;font-weight:700;color:#6C52A8;font-family:-apple-system,"PingFang SC",sans-serif;margin-bottom:12px;';
      const hiddenCount = reviewList.filter(f => qa2Map[signKey(f)]).length;
      doneText.textContent = `全部 ${total} 张已审核完毕！共标记 ${hiddenCount} 张需要隐藏。`;
      const backHome = document.createElement('button');
      backHome.textContent = '← 返回首页';
      backHome.style.cssText = 'padding:8px 24px;font-size:14px;font-family:-apple-system,"PingFang SC",sans-serif;color:#fff;background:#6C52A8;border:none;border-radius:999px;cursor:pointer;';
      backHome.addEventListener('click', () => { window.location.search = ''; });
      doneBox.appendChild(doneText);
      doneBox.appendChild(backHome);
      stage.appendChild(doneBox);
    }
    document.body.style.paddingBottom = '';
  }
}

function saveQa2Map(map) {
  try { localStorage.setItem(getQa2StorageKey(), JSON.stringify(map)); } catch (e) {}
}

init();

/* ====== 彗星拖尾流星雨（Canvas，缓慢优雅，低密度） ====== */
(function () {
  const container = document.getElementById('meteor-container');
  const canvas = document.getElementById('meteor-canvas');
  if (!container || !canvas) return;

  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, dpr = 1;
  let comets = [];
  let mode = 'sparse';
  let burstUntil = 0;
  let spawnAccum = 0;
  let last = performance.now();

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = container.clientWidth;
    H = container.clientHeight;
    canvas.width = Math.max(1, Math.round(W * dpr));
    canvas.height = Math.max(1, Math.round(H * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);

  /* 生成一颗彗星：左上→右下斜线，亮头+长锥形拖尾，缓慢移动 */
  function spawnComet(opts) {
    opts = opts || {};
    const fast = opts.fast || false;
    // 角度：固定左上→右下，斜率约 0.35~0.45
    const angle = 0.35 + Math.random() * 0.10;
    // 速度大幅降低：原来 5.5~11，现在 1.2~2.5（缓慢下落）
    const speed = (fast ? 2.0 : 1.2) + Math.random() * (fast ? 1.5 : 1.3);
    // 拖尾长度大幅加长：原来 200~480，现在 300~600
    const tailLen = 300 + Math.random() * 300;
    // 起点偏左上区域
    const startX = -80 + Math.random() * (W * 0.4);
    const startY = -60 + Math.random() * (H * 0.15);
    comets.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed * 60,  // px/s
      vy: Math.sin(angle) * speed * 60,
      tailLen: tailLen,
      life: 1,
      decay: fast ? (0.003 + Math.random() * 0.003) : (0.0018 + Math.random() * 0.002),
      glow: 0.75 + Math.random() * 0.25,
      headSize: fast ? (5 + Math.random() * 3) : (6 + Math.random() * 4),
      tailWidth: fast ? (2 + Math.random() * 1) : (2.5 + Math.random() * 1.5)
    });
  }

  /* 抽卡时短暂密集（但仍保持彗星风格，只是稍快稍多） */
  function burst(n) {
    for (let i = 0; i < n; i++) spawnComet({ fast: true });
  }

  function update(dt) {
    const now = performance.now();
    if (now < burstUntil) {
      // 抽卡密集期：补给频率降低，保持彗星优雅感
      if (Math.random() < dt * 6) spawnComet({ fast: true });
    } else if (mode === 'sparse') {
      // 首页零星：每 2.5~5 秒一颗（大幅降低密度）
      spawnAccum += dt;
      if (spawnAccum > 2.5 + Math.random() * 2.5) {
        spawnAccum = 0;
        spawnComet();
      }
    }
    // 更新彗星
    for (let i = comets.length - 1; i >= 0; i--) {
      const c = comets[i];
      c.x += c.vx * dt;
      c.y += c.vy * dt;
      c.life -= c.decay * dt * 60;
      if (c.life <= 0 || c.y > H + 150 || c.x > W + 150) {
        comets.splice(i, 1);
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const c of comets) {
      const alpha = Math.min(1, c.life * 1.2);
      const gx = c.vx, gy = c.vy;
      const gmag = Math.sqrt(gx * gx + gy * gy) || 1;
      // 尾迹方向（反向）
      const tx = c.x - (gx / gmag) * c.tailLen;
      const ty = c.y - (gy / gmag) * c.tailLen;

      // 1. 外层柔光拖尾（宽、淡、模糊）
      const outerGrad = ctx.createLinearGradient(tx, ty, c.x, c.y);
      outerGrad.addColorStop(0, 'rgba(200, 180, 240, 0)');
      outerGrad.addColorStop(0.5, `rgba(200, 180, 240, ${0.06 * alpha * c.glow})`);
      outerGrad.addColorStop(0.85, `rgba(220, 200, 250, ${0.15 * alpha * c.glow})`);
      outerGrad.addColorStop(1, `rgba(230, 215, 255, ${0.25 * alpha * c.glow})`);
      ctx.strokeStyle = outerGrad;
      ctx.lineWidth = c.tailWidth * 4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(c.x, c.y);
      ctx.stroke();

      // 2. 内层亮拖尾（窄、亮、银白渐变）
      const innerGrad = ctx.createLinearGradient(tx, ty, c.x, c.y);
      innerGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      innerGrad.addColorStop(0.6, `rgba(245, 240, 255, ${0.3 * alpha * c.glow})`);
      innerGrad.addColorStop(0.9, `rgba(255, 250, 245, ${0.65 * alpha * c.glow})`);
      innerGrad.addColorStop(1, `rgba(255, 255, 255, ${0.9 * alpha})`);
      ctx.strokeStyle = innerGrad;
      ctx.lineWidth = c.tailWidth;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(c.x, c.y);
      ctx.stroke();

      // 3. 头部光晕（径向渐变，带模糊发光）
      const headR = c.headSize * 3;
      const headGlow = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, headR);
      headGlow.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      headGlow.addColorStop(0.2, `rgba(245, 235, 255, ${0.7 * alpha})`);
      headGlow.addColorStop(0.5, `rgba(220, 200, 250, ${0.3 * alpha})`);
      headGlow.addColorStop(1, 'rgba(200, 180, 240, 0)');
      ctx.fillStyle = headGlow;
      ctx.beginPath();
      ctx.arc(c.x, c.y, headR, 0, Math.PI * 2);
      ctx.fill();

      // 4. 头部核心亮点
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.headSize * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    update(dt);
    draw();
    requestAnimationFrame(loop);
  }

  window.setMeteorMode = function (m) {
    mode = m;
    if (m === 'dense') {
      // 抽卡瞬间：适量彗星爆发（降低数量保持优雅）
      burstUntil = performance.now() + 1800;
      burst(8 + Math.floor(Math.random() * 5));   // 8~12 颗
    } else {
      burstUntil = 0;
    }
  };

  resize();
  requestAnimationFrame(loop);
})();

