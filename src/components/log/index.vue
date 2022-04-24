<template>
    <div class="log-dialog">
        <el-dialog
            title="更新日志"
            :visible.sync="isShowDialog"
            width="70%"
            top="100px"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :before-close="handleClose"
        >
            <div class="log-bg"></div>
            <!-- 版本信息 -->
            <div class="info">
                <div
                    class="info-item"
                    v-for="(info, i) in datas.info"
                    :key="'ver1' + i"
                >
                    <div class="info-title">
                        <span class="ver">版本号：V{{ info.version }}</span>
                        <span class="date">更新于 {{ info.date }}</span>
                    </div>
                    <div class="info-content">
                        <ul>
                            <li
                                v-for="(des, i) in info.content"
                                :key="'con1' + i"
                            >
                                {{ des }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 信息统计 -->
            <div class="debug-footer">
                <p>
                    Tips：若未及时更新或版本信息描述不清，请第一时间与开发人员联系。
                </p>
                <p>
                    <span>{{ title }}</span> 已进行 <span>{{ verCount }}</span
                    >次的版本迭代，共解决 <span>{{ bugCount }}</span
                    >个问题。
                </p>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "Log",
    props: ["title","datas"],
    data() {
        return {
            isShowDialog: true,
        }
    },
    computed: {
        // 版本信息总次数统计
        verCount() {
            let count = 0
            if (this.datas.info instanceof Array) {
                count = this.datas.info.length
            }

            return count
        },
        // 版本信息问题总数统计
        bugCount() {
            let count = 0
            if (this.datas.info instanceof Array) {
                for (let i = 0; i < this.datas.info.length; i++) {
                    let content = this.datas.info[i].content.length
                    count += content
                }
            }
            return count
        }
    },
    methods: {
        handleClose() {
            this.$emit("close", true)
        }
    }
}
</script>

<style scoped>
.info {
    height: 500px;
    overflow: auto;
}
.info-title {
    position: relative;
    border-bottom: 1px solid rgba(81, 90, 110, 0.3);
}
.info-title .ver {
    font-weight: 600;
}
.info-title .date {
    position: absolute;
    right: 15px;
}
.info-item {
    margin: 0 0 20px 0;
}
.info-item:last-child {
    margin-bottom: 37px;
}
.info-content ul li {
    padding: 0 5px;
    list-style: decimal;
    position: relative;
    height: 38px;
    line-height: 38px;
}
.info-content ul li::before {
    content: attr(data-index);
    position: absolute;
    top: 5px;
    left: 0;
}
.debug-footer {
    font-size: 16px;
    line-height: 30px;
}
.debug-footer p:last-child {
    text-indent: 43px;
}
.debug-footer span {
    padding: 0 5px;
    font-weight: 550;
    color: #cf1313;
}
.log-dialog >>> .el-dialog__header {
    padding: 10px 20px 0 20px;
}
.log-dialog >>> .el-dialog__body {
    padding: 10px 20px;
}
</style>
