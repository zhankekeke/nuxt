<style scoped style="less">

</style>
<template>
    <section>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="Name" prop="name">
            <Input v-model.trim="formValidate.name" placeholder="Enter your name"></Input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
            <Input v-model.trim="formValidate.mail" placeholder="Enter your e-mail"></Input>
        </FormItem>
        <FormItem label="City" prop="city">
            <Select v-model="formValidate.city" placeholder="Select your city">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="Date"  prop ="date">
            <DatePicker type="date" 
            format="yyyy-MM-dd"
            v-model="formValidate.date"
            :start-date="new Date()"
            placement="bottom-end" placeholder="Select date"
             style="width: 200px">
             </DatePicker>
        </FormItem>
         <FormItem label="时间"  prop ="time">
             <TimePicker type="time"
             format="HH:mm"
             v-model="formValidate.time"
              placeholder="请选择时间"
              :steps="[5,5]" 
              style="width: 168px"></TimePicker>
        </FormItem>
        <FormItem label="Gender" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Hobby" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Desc" prop="desc">
            <Input v-model.trim="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit()">Submit</Button>
            <Button @click="handleReset()" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
    </section>
</template>
<script>
import axios from '~/plugins/axios'
export default { 
    data() {
        const validateName =(rule,value,callback) =>{
            let reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value)
           // debugger;
            if(!reg){
               callback('不能包含特殊字符')
            }else{
                callback()
            }
        }
        const validatetime = (rule,value,callback) =>{
            //选择倍数
          if(value){
               callback()
          }else{
            callback('请选择时间')
          }
     
        }
        const validateStime = (rule, value, callback) => {
           // console.log(value)
                if (!value) {
                    callback('请选择来访时间');
                } else {
                    //当天日期
                     let date3 = new Date();
                     let nowDay = date3.getFullYear() + "-" + ((date3.getMonth() + 1) < 10 ? "0" + (date3.getMonth() + 1) : (date3.getMonth() + 1)) + "-" + (date3.getDate() < 10 ? "0" + date3.getDate() : date3.getDate());
                    //  let start = value[0].getFullYear() + "-" + ((value[0].getMonth() + 1) < 10 ? "0" + (value[0].getMonth() + 1) : (value[0].getMonth() + 1)) + "-" + (value[0].getDate() < 10 ? "0" + value[0].getDate() : value[0].getDate());
                    let start = value.getFullYear() + "-" + ((value.getMonth() + 1) < 10 ? "0" + (value.getMonth() + 1) : (value.getMonth() + 1)) + "-" + (value.getDate() < 10 ? "0" + value.getDate() : value.getDate());
                      if(start<nowDay){
                          callback('开始时间需大于当前时间')
                      }
                    // let oDate2 = new Date(nowDay);//现在时间
                    callback();
                }
            };
           
        return {
            formValidate: {
                name: '',
                mail: '',
                city: '',
                gender: '',
                interest: [],
                date: '',
                time: '',
                desc: ''
            },
            ruleValidate: {
                name: [
                    //非空验证
                    { required: true, message: '姓名不能为空', trigger: 'change' },
                    //长度验证
                    {
                     type:'string', max:'50',message:'长度不超过50个字',trigger:'change'
                    },
                    //特殊字符验证
                     {
                     validator:validateName,trigger:'change'
                    }
                ],
                mail: [
                    { required: true, message: '邮箱不能为空', trigger: 'change' },
                    { type: 'email', message: '请输入证确的邮箱', trigger: 'change' }
                ],
                city: [
                    { required: true, message: '请选择', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: 'Please select gender', trigger: 'change' }
                ],
                interest: [
                    { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                ],
               
                   date: [
                        {required: true,validator:validateStime, trigger: 'change'}
                ],
                 time: [
                        {required: true,validator:validatetime, trigger: 'change'}
                ],
                desc: [
                    { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                    { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                ]
            }
        }
    },
    created() {
        console.log(this.$route.query.row)
    },
    methods: {
        handleSubmit() {
            // debugger;
            this.$refs.formValidate.validate((valid) => {
                
                if (valid) {
                   console.log(valid)
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        handleReset(name) {
            // this.$refs.formValidate.resetFields();
        }
    }
}
</script>
