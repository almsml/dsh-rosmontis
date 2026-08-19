const COPY = Object.freeze({
  idle: [
    '我在这儿等博士的新任务哦',
    '现在暂时没任务呢……要一起待一会儿吗？',
    '迷迭香正在待命中~博士记得提醒我哦，我很容易忘事。',
  ],
  preparing: [
    '新任务正在梳理中哦~',
    '让我先看看项目呢，博士。',
    '正在理清接下来要做什么呀。',
  ],
  thinking: [
    '正在认真想下一步呢……',
    '嗯……我会好好记住的，不会忘。',
    '让我整理一下刚才的结果呢。',
  ],
  searching: [
    '正在帮博士找相关内容呢',
    '正在项目里仔细找找哦~',
    '我会把需要的东西都找出来的。',
  ],
  editing: [
    '这部分正在修改中哦',
    '正在把改动写进去呢',
    '我会好好完成的，请放心。',
  ],
  testing: [
    '正在认真检查结果呢',
    '正在跑测试确认一下哦',
    '我要确认它没有问题……大家都不可以受伤。',
  ],
  commanding: [
    '正在执行项目命令呢',
    '正在让项目跑起来哦',
    '给我命令吧，我一定能完美地执行。',
  ],
  working: [
    '正在继续处理任务呢',
    '这一步正在进行中哦',
    '迷迭香还在认真干活呢，博士再等我一下。',
  ],
  result: [
    '正在整理刚才的结果呢',
    '这一步处理好了，继续看看哦',
    '我会把这些结果好好记下来的。',
  ],
  waiting: [
    '需要博士确认一下后续呢',
    '这里要等博士看一下哦',
    '轮到博士来决定下一步啦',
  ],
  success: [
    '做得好，博士，你真棒，谢谢你。',
    '这一轮顺利完成啦~',
    '任务完成咯，博士。',
  ],
  toolError: [
    '这一步好像没跑通呢……',
    '刚才的操作遇到一点问题哦',
    '我会再试一次的，不会放弃的。',
  ],
  error: [
    '任务好像遇到一点问题呢……',
    '这里需要博士回来看看啦',
    '呜……对不起，我没能做好。',
  ],
  stopped: [
    '任务已经停下来啦',
    '这次任务先停在这里哦，博士。',
  ],
  limit: [
    '内容有点多，到上限啦……',
    '这次输出已经到上限咯',
  ],
})

function seedNumber(seed) {
  const number = Number(seed)
  if (Number.isFinite(number)) return Math.abs(Math.trunc(number))
  return [...String(seed ?? '')].reduce((total, character) => total + character.codePointAt(0), 0)
}

export function statusCopy(group, seed = 0) {
  const variants = COPY[group] ?? COPY.working
  return variants[seedNumber(seed) % variants.length]
}

export function activityCopy(activity, seed = 0) {
  return statusCopy({
    searching: 'searching',
    editing: 'editing',
    testing: 'testing',
    commanding: 'commanding',
  }[activity] ?? 'working', seed)
}

export function activityStage(activity) {
  return {
    searching: '查找阶段',
    editing: '实现阶段',
    testing: '验证阶段',
    commanding: '执行阶段',
  }[activity] ?? '处理阶段'
}

export function taskCopy(task) {
  const value = String(task ?? '').trim().replace(/[。！？.!?]+$/u, '')
  if (!value) return statusCopy('working')
  if (/^(正在|继续)/u.test(value)) {
    return `${value}呢`
  }
  if (/^(准备|检查|验证|修改|修复|测试|构建|整理|分析|梳理|查找|搜索|读取|实现)/u.test(value)) {
    return `正在${value}呢`
  }
  return `正在处理「${value}」呢`
}

export { COPY as statusCopyLibrary }
